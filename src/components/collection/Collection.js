import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'

import { Button, Row, Col, PageHeader } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export const Collection = () => {
    const { getCollectionById, deleteCollection } = useContext(CollectionContext)

    const [collection, setCollection] = useState([])

    const { collectionId } = useParams()

    const history = useHistory()

    const routes = [
        {
            path: 'index',
            breadcrumbName: 'First-level Menu'
        },
        {
            path: 'first',
            breadcrumbName: 'Second-level Menu'
        },
        {
            path: 'second',
            breadcrumbName: 'Third-level Menu'
        }
    ]

    useEffect(() => {
        getCollectionById(collectionId)
            .then((res) => {
                setCollection(res)
            })
    }, [collectionId])

    return (
        <Row className='collection-row'>
            <Col>
                <PageHeader
                    className='collection-page-header'
                    title={collection.name}
                    breadcrumb={{ routes }}
                    subTitle={collection.desc}
                    extra={[
                        <Button type="primary" shape='circle' icon={<EditOutlined />} />,
                        <Button type="primary" shape='circle' icon={<DeleteOutlined />} danger />
                    ]}
                />
            </Col>
        </Row>
    )
}