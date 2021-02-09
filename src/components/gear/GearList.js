import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GearContext } from './GearProvider'

import { Table } from 'antd'

export const GearList = (props) => {
    const currentUser = parseInt(localStorage.getItem('stockpileUser'))
    const currentCollection = props.collectionId

    const { gear, getGear } = useContext(GearContext)

    const { gearId } = useParams()

    useEffect(() => {
        getGear()
    }, [gearId])

    const col = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Available',
            dataIndex: 'available',
            key: 'available'
        }
    ]

    const dataSource = []

    const collectionGear = gear.filter(gear => gear.collectionId === currentCollection)

    return (
        <Table columns={col} dataSource={dataSource} />
    )
}