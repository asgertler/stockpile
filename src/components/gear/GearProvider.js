import React, { useState, createContext } from 'react'

export const GearContext = createContext()

export const GearProvider = (props) => {
    const [gear, setGear] = useState([])

    const getGear = () => {
        return fetch('https://stockpile-api.herokuapp.com/gear?_expand=collection&_expand=user')
            .then(res => res.json())
            .then(setGear)
    }

    const addGear = obj => {
        return fetch('https://stockpile-api.herokuapp.com/gear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(getGear)
    }

    const editGear = obj => {
        return fetch(`https://stockpile-api.herokuapp.com/gear/${obj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(getGear)
    }

    const deleteGear = id => {
        return fetch(`https://stockpile-api.herokuapp.com/gear/${id}`, {
            method: 'DELETE'
        })
            .then(getGear)
    }

    const getGearById = id => {
        return fetch(`https://stockpile-api.herokuapp.com/gear/${id}`)
            .then(res => res.json())
    }

    return (
        <GearContext.Provider value={{
            gear, getGear, addGear, editGear, deleteGear, getGearById
        }}>
            {props.children}
        </GearContext.Provider>
    )
}