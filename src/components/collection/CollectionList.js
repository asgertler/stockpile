import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'

import { Menu } from 'antd'
import { AppstoreOutlined, PlusCircleOutlined } from '@ant-design/icons'

export const CollectionList = () => {
    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const { collections, getCollections } = useContext(CollectionContext)

    const { collectionId } = useParams()

    useEffect(() => {
        getCollections()
    }, [collectionId])

    const userCollections = collections.filter(collection => collection.userId === currentUser)

    return (
        <Menu theme='dark' mode='inline' id='sidebarMainUl'>
            {
                userCollections.map(collection => {
                    return (
                        <Menu.Item key={collection.id} icon={<AppstoreOutlined className='sidebar-links' />}>
                            <Link to={`/collection/${collection.id}`}>
                                {collection.name}
                            </Link>
                        </Menu.Item>
                    )
                })
            }

            <Menu.Item icon={<PlusCircleOutlined className='sidebar-links' />}>
                <Link to={`/collection/new`} replace>
                    Add New Collection
                </Link>

            </Menu.Item>
        </Menu>
    )
}