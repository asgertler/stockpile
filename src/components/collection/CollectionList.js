import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'
import { CollectionCard } from './CollectionCard'

import { Menu } from 'antd'

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
                userCollections.map(collections => {
                    return <CollectionCard key={collections.id} collection={collections} />
                })
            }
        </Menu>
    )
}