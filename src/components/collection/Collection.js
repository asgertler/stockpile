import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'
import { CollectionForm } from './CollectionForm'

import { Button, Row, Col, PageHeader, Table } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export const Collection = () => {
    const { getCollectionById, deleteCollection } = useContext(CollectionContext)

    const [collection, setCollection] = useState([])

    const { collectionId } = useParams()

    const history = useHistory()

    useEffect(() => {
        getCollectionById(collectionId)
            .then((res) => {
                setCollection(res)
            })
    }, [collectionId])

    return (
        <Row className='collection-row'>
            <Col xs={24}>
                <PageHeader
                    className='collection-page-header'
                    title={collection.name}
                    subTitle={collection.desc}
                    extra={[
                        <Button type="primary" shape='circle' icon={<EditOutlined />} />,
                        <Button type="primary" shape='circle' icon={<DeleteOutlined />} danger />
                    ]}
                />

                <Table />
            </Col>
        </Row>
    )
}