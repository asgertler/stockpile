import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'

import { Row, Col, Form, Input, Button, message } from 'antd'

export const CollectionForm = () => {
    const { getCollections, addCollection, getCollectionById, editCollection } = useContext(CollectionContext)

    const [collection, setCollection] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { collectionId } = useParams()

    const history = useHistory()

    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const toastCreate = () => {
        message.success('Collection was created');
    }

    const toastEdit = () => {
        message.success('Collection was edited');
    }

    const handleControlledInputChange = (e) => {
        const newCollection = { ...collection }
        newCollection[e.target.name] = e.target.value
        setCollection(newCollection)
    }

    const [form] = Form.useForm()

    useEffect(() => {
        getCollections().then(() => {
            if (collectionId) {
                getCollectionById(collectionId)
                    .then(collection => {
                        setCollection(collection)
                        form.setFieldsValue({
                            name: collection.name,
                            desc: collection.desc
                        })
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructNewCollection = () => {
        setIsLoading(true)

        if (collectionId) {
            editCollection({
                id: collection.id,
                name: collection.name,
                desc: collection.desc,
                shared: collection.shared
            })
                .then(() => history.push(`/collection/${collection.id}`))
                .then(toastEdit())
        } else {
            addCollection({
                userId: currentUser,
                name: collection.name,
                desc: collection.desc,
                shared: collection.shared
            })
                .then(history.push('/'))
                .then(toastCreate())
        }
    }

    return (
        <Row justify='center' align='middle' className='form-container-r'>
            <Col xs={24} lg={12} className='form-container-c'>
                <h2>{collectionId ? 'Edit Collection' : 'Add New Collection'}</h2>

                <Form
                    form={form}
                    name="collection-form"
                    className="collection-form"
                    onFinish={constructNewCollection}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please name your collection',
                            },
                        ]}
                    >
                        <Input name='name' placeholder="Collection Name"
                            onChange={handleControlledInputChange} />
                    </Form.Item>

                    <Form.Item
                        name="desc"
                        rules={[
                            {
                                required: true,
                                message: 'Please give your collection a short description',
                            },
                        ]}
                    >
                        <Input name='desc' placeholder="Description (e.g., 'Gear stored in the office closet'"
                            onChange={handleControlledInputChange} />
                    </Form.Item>

                    <Form.Item className='form-btns-container'>
                        <Button type='primary' className='form-btns' htmlType='submit' disabled={isLoading}>
                            Submit
                        </Button>

                        <Button className='form-btns' disabled={isLoading} onClick={() => {
                            collection.id ?
                                history.push(`/collection/${collection.id}`) :
                                history.push('/')
                        }}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}