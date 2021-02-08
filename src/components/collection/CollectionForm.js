import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'

import { Row, Col, Form, Input, Button } from 'antd'

export const CollectionForm = () => {
    const { getCollections, addCollection, getCollectionById, editCollection } = useContext(CollectionContext)

    const [collection, setCollection] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { collectionId } = useParams()

    const history = useHistory()

    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const handleControlledInputChange = (e) => {
        const newCollection = { ...collection }
        newCollection[e.target.name] = e.target.value
        setCollection(newCollection)
    }

    useEffect(() => {
        getCollections().then(() => {
            if (collectionId) {
                getCollectionById(collectionId)
                    .then(collection => {
                        setCollection(collection)
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
        } else {
            addCollection({
                userId: currentUser,
                name: collection.name,
                desc: collection.desc,
                shared: collection.shared
            })
                .then(history.push('/'))
        }
    }

    console.log(collection.name)

    return (
        <Row justify='center' align='middle' className='form-container-r'>
            <Col xs={24} lg={12} className='form-container-c'>
                <h2>{collectionId ? 'Edit Collection' : 'Add New Collection'}</h2>

                <Form
                    name="collection-form"
                    className="collection-form"
                    initialValues={{ remember: true }}
                    onFinish={constructNewCollection}
                    initialValues={{
                        ['name']: collection.name
                    }}
                >
                    <Form.Item
                        name="collectionName"
                        rules={[
                            {
                                required: true,
                                message: 'Please name your collection',
                            },
                        ]}
                    >
                        <Input placeholder="Collection Name" name='name' />
                    </Form.Item>

                    <Form.Item
                        name="collectionDesc"
                        rules={[
                            {
                                required: true,
                                message: 'Please give your collection a short description',
                            },
                        ]}
                    >
                        <Input placeholder="Description (e.g., 'Gear stored in the office closet'"
                            name='desc' defaultValue={collection.desc} />
                    </Form.Item>

                    <Form.Item className='form-btns-container'>
                        <Button type='primary' className='form-btns' htmlType='submit' disabled={isLoading}>
                            Submit
                        </Button>

                        <Button className='form-btns'>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}