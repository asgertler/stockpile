import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [collections, setCollections] = useState([])

    const getCollections = () => {
        return fetch('http://localhost:8088/collections?_expand=user')
            .then(res => res.json())
            .then(setCollections)
    }

    return (
        <CollectionContext.Provider value={{
            collections, getCollections
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}