import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../user/UserProvider'

import { Row, Col } from 'antd'

export const DashboardDefault = () => {
    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const { users, getUsers } = useContext(UserContext)
    const [user, setUser] = useState([])

    useEffect(() => {
        getUsers()
            .then(setUser(users.filter(user => user.id === currentUser)))
    }, [])

    useEffect(() => {
        getUsers()
            .then(setUser(users.filter(user => user.id === currentUser)))
    }, [currentUser])

    console.log(user.length)

    // const fullName = user[0]?.name
    // const nameArr = fullName?.split(" ")
    // const firstName = nameArr[0]

    const today = new Date()
    const currentTime = today.getHours()

    let timeGreeting
    if (currentTime >= 4 && currentTime <= 11) {
        timeGreeting = "Good Morning"
    } else if (currentTime >= 12 && currentTime <= 19) {
        timeGreeting = "Good Afternoon"
    } else {
        timeGreeting = "Good Evening"
    }

    return (
        <Row justify='center' align='middle' className='default-row'>
            <Col className='default-col'>
                <h2>{timeGreeting}!</h2>

                <p>Click on one of your collections in the sidebar to see your list of gear,
                    or click the plus to add a new one!</p>
            </Col>
        </Row>
    )
}