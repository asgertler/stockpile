import React, { useState, createContext } from 'react'

export const CollectionContext = createContext()

export const CollectionProvider = (props) => {
    const [collections, setCollections] = useState([])

    const getCollections = () => {
        return fetch('https://stockpile-api.herokuapp.com/collections?_expand=user')
            .then(res => res.json())
            .then(setCollections)
    }

    const addCollection = obj => {
        return fetch('hhttps://stockpile-api.herokuapp.com/collections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(getCollections)
    }

    const editCollection = obj => {
        return fetch(`https://stockpile-api.herokuapp.com/collections/${obj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(getCollections)
    }

    const deleteCollection = id => {
        return fetch(`https://stockpile-api.herokuapp.com/collections/${id}`, {
            method: 'DELETE'
        })
            .then(getCollections)
    }

    const getCollectionById = id => {
        return fetch(`https://stockpile-api.herokuapp.com/collections/${id}`)
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