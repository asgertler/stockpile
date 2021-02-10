import React, { useState, createContext } from 'react'

export const CollectionContext = createContext()

export const CollectionProvider = (props) => {
    const [collections, setCollections] = useState([])

    const getCollections = () => {
        return fetch('http://localhost:8088/collections?_expand=user')
            .then(res => res.json())
            .then(setCollections)
    }

    const addCollection = obj => {
        return fetch('http://localhost:8088/collections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(getCollections)
    }

    const editCollection = obj => {
        return fetch(`http://localhost:8088/collections/${obj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(getCollections)
    }

    const deleteCollection = id => {
        return fetch(`http://localhost:8088/collections/${id}`, {
            method: 'DELETE'
        })
            .then(getCollections)
    }

    const getCollectionById = id => {
        return fetch(`http://localhost:8088/collections/${id}?_expand=user`)
            .then(res => res.json())
    }

    return (
        <CollectionContext.Provider value={{
            collections, getCollections, addCollection, editCollection, deleteCollection, getCollectionById
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}