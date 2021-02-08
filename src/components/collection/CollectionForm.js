import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'

import { Row, Col, Form, Input, Button, Checkbox, message, Modal } from 'antd'

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
        } else {
            addCollection({
                userId: currentUser,
                name: collection.name,
                desc: collection.desc,
                shared: collection.shared
            })
        }
    }

    return (
        <Row>
            <Col xs={24}>
                <Form
                    name="collection-form"
                    className="collection-form"
                    initialValues={{
                        remember: true,
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
                        <Input placeholder="Collection Name" ref='' />
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
                        <Input placeholder="Description (e.g., 'Gear stored in the office closet'" ref='' />
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}