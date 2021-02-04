import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CollectionContext } from './CollectionProvider'
import { CollectionCard } from './CollectionCard'

export const Collection List = () => {
    const { collections, getCollections } = useContext(CollectionContext)

    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const { collectionId } = useParams()

    useEffect(() => {
        getCollections()
    }, [collectionId])

    const history = useHistory()

    const userCollections = collections.filter(collection => collection.userId = currentUser)

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