import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { GearContext } from './GearProvider'

import { Row, Col, Form, Input, Button, message, Checkbox } from 'antd'

export const GearForm = props => {
    const { getGear, addGear, getGearById, editGear } = useContext(GearContext)

    const [gear, setGear] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { collectionId } = useParams()
    const { gearId } = useParams()

    const history = useHistory()

    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const toastCreate = () => {
        message.success('Gear was added');
    }

    const toastEdit = () => {
        message.success('Gear was edited');
    }

    const handleControlledInputChange = (e) => {
        const newGear = { ...gear }
        newGear[e.target.name] = e.target.value
        setGear(newGear)
    }

    const handleControlledCheckboxChange = (e) => {
        const newGear = { ...gear }
        newGear[e.target.name] = e.target.checked
        setGear(newGear)
    }

    const [form] = Form.useForm()

    useEffect(() => {
        getGear().then(() => {
            if (gearId) {
                getGearById(gearId)
                    .then(gear => {
                        setGear(gear)
                        form.setFieldsValue({
                            type: gear.type,
                            name: gear.name,
                            desc: gear.desc,
                            photo: gear.photo,
                            available: gear.available
                        })
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructNewGear = () => {
        setIsLoading(true)

        if (gearId) {
            editGear({
                id: gear.id,
                type: gear.type,
                name: gear.name,
                desc: gear.desc,
                photo: gear.photo,
                available: gear.available
            })
                .then(() => history.push(`/collection/${gear.collectionId}`))
                .then(toastEdit())
        } else {
            addGear({
                userId: currentUser,
                collectionId: parseInt(collectionId),
                type: gear.type,
                name: gear.name,
                desc: gear.desc,
                photo: gear.photo,
                available: true
            })
                .then(history.push(`/collection/${collectionId}`))
                .then(toastCreate())
        }
    }

    return (
        <Row justify='center' align='middle' className='form-container-r'>
            <Col xs={24} md={18} xl={12} xxl={6} className='form-container-c'>
                <h2>{gearId ? 'Edit Gear' : 'Add New Gear'}</h2>

                <Form
                    form={form}
                    name="gear-form"
                    layout='vertical'
                    className="collection-form"
                    onFinish={constructNewGear}
                >
                    <Form.Item
                        name="type"
                        label='Type:'
                        rules={[
                            {
                                required: true,
                                message: 'Please give your gear a type',
                            },
                        ]}
                    >
                        <Input name='type' placeholder="Gear Type"
                            onChange={handleControlledInputChange} />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label='Name:'
                        rules={[
                            {
                                required: true,
                                message: 'Please give your gear a name',
                            },
                        ]}
                    >
                        <Input name='name' placeholder="Gear Name"
                            onChange={handleControlledInputChange} />
                    </Form.Item>

                    <Form.Item
                        name="desc"
                        label='Description'
                        rules={[
                            {
                                required: true,
                                message: 'Please give your gear a description',
                            },
                        ]}
                    >
                        <Input name='desc' placeholder="Gear Description"
                            onChange={handleControlledInputChange} />
                    </Form.Item>

                    <Form.Item name="photo" label='Image'>
                        <Input name='photo' placeholder="Insert image URL here"
                            onChange={handleControlledInputChange} />
                    </Form.Item>

                    <Form.Item className='form-btns-container'>
                        <Button type='primary' className='form-btns' htmlType='submit' disabled={isLoading}>
                            Submit
                        </Button>

                        <Button className='form-btns' disabled={isLoading} onClick={() => {
                            history.push(`/collection/${collectionId}`)
                        }}>
                            Cancel
                        </Button>

                        {gearId ?
                            <Checkbox name='available' style={{ float: 'right' }}
                                onChange={handleControlledCheckboxChange}
                                checked={
                                    gear.available ? true : false
                                }
                            >
                                Currently Available?
                        </Checkbox>
                            :
                            ''
                        }
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}