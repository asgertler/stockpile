import React, { useContext, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { GearContext } from './GearProvider'

import { Table, Tag, message } from 'antd'

export const GearList = (props) => {
    const currentUser = parseInt(localStorage.getItem('stockpileUser'))
    const currentCollection = props.collectionId

    const { gear, getGear, deleteGear } = useContext(GearContext)

    const { gearId } = useParams()

    const toastDelete = () => {
        message.success('Collection was deleted');
    }

    useEffect(() => {
        getGear()
    }, [gearId])

    const collectionGear = gear.filter(gear => gear.collectionId === currentCollection)

    const history = useHistory()

    const dataSource = collectionGear.map(gear => ({
        key: gear.id,
        id: gear.id,
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
        },
        {
            title: 'Update',
            dataIndex: 'id',
            key: 'id',
            render: id => <>
                <Link onClick={() => history.push(`/collection/${currentCollection}/gear/${id}/edit`)}>
                    Edit
                </Link>
                &nbsp; / &nbsp;
                <Link onClick={() => {
                    deleteGear(id)
                        .then(toastDelete())
                }}>
                    Delete
                </Link>
            </>
        }
    ]

    return (
        <Table bordered columns={col} dataSource={dataSource} />
    )
}