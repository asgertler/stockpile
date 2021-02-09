import React, { useState, createContext } from 'react'

export const GearContext = createContext()

export const GearProvider = (props) => {
    const [gear, setGear] = useState([])

    const getGear = () => {
        return fetch('http://localhost:8088/gear?_expand=collection&_expand=user')
            .then(res => res.json())
            .then(setGear)
    }
}