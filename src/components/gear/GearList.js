import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GearContext } from './GearProvider'

import { Table } from 'antd'

export const GearList = () => {
    const currentUser = parseInt(localStorage.getItem('stockpileUser'))

    const { gear, getGear } = useContext(GearContext)

    const { gearId } = useParams()

    useEffect(() => {
        getGear()
    }, [gearId])

    // const userCollections = collections.filter(collection => collection.userId === currentUser)

    return (
        <Table />
    )
}