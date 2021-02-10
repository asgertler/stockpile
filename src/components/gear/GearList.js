import React, { useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { GearContext } from './GearProvider'
import { GearSearch } from './GearSearch'

import { Table, Tag, message, Image } from 'antd'

export const GearList = (props) => {
    const currentCollection = props.collectionId

    const { gear, getGear, deleteGear, searchTerms } = useContext(GearContext)

    const toastDelete = () => {
        message.success('Collection was deleted');
    }

    useEffect(() => {
        getGear()
    }, [])

    const collectionGear = gear.filter(gear => gear.collectionId === currentCollection)

    const history = useHistory()

    const dataSource = collectionGear.map(gear => ({
        key: gear.id,
        id: gear.id,
        type: gear.type,
        name: gear.name,
        photo: gear.photo,
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
            title: 'Image',
            dataIndex: 'photo',
            key: 'photo',
            align: 'center',
            render: photo => <Image height={48} style={{ width: 'auto' }} src={photo} />
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
            align: 'center',
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
            align: 'center',
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
        <>
            <GearSearch />

            <Table bordered columns={col} dataSource={dataSource}
                pagination={{ position: ['topRight', 'bottomRight'] }} />
        </>
    )
}