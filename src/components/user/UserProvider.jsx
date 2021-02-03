import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch('http://localhost:8088/users')
            .then(res => res.json())
            .then(setUsers)
    }

    const addUser = userObj => {
        return fetch('http://localhost:8088/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
            .then(getUsers)
    }

    const editUser = userObj => {
        return fetch(`http://localhost:8088/users/${userObj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
            .then(getUsers)
    }

    const deleteUser = id => {
        return fetch(`http://localhost:8088/users/${id}`, {
            method: 'DELETE'
        })
            .then(getUsers)
    }

    const getUserById = id => {
        return fetch(`http://localhost:8088/users/${id}`)
            .then(res => res.json())
    }

    return (
        <UserContext.Provider value={{
            users, getUsers, addUser, editUser, deleteUser, getUserById
        }}>
            {props.children}
        </UserContext.Provider>
    )
}