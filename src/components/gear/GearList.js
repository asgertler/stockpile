import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GearContext } from './GearProvider'

import { Table, Tag } from 'antd'

export const GearList = (props) => {
    const currentUser = parseInt(localStorage.getItem('stockpileUser'))
    const currentCollection = props.collectionId

    const { gear, getGear } = useContext(GearContext)

    const { gearId } = useParams()

    useEffect(() => {
        getGear()
    }, [gearId])

    const collectionGear = gear.filter(gear => gear.collectionId === currentCollection)

    const dataSource = collectionGear.map(gear => ({
        key: gear.id,
        type: gear.type,
        name: gear.name,
        description: gear.desc,
        available: gear.available
    }))

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
            key: 'available',
            render: available => (
                <Tag key={available} color={available ? 'green' : 'volcano'}>
                    {available ? 'Yes' : 'No'}
                </Tag>
            )
        }
    ]

    return (
        <Table columns={col} dataSource={dataSource} />
    )
}