import React, { useContext, useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { GearContext } from './GearProvider'
import { GearSearch } from './GearSearch'

import { Table, Tag, message, Image, Popconfirm } from 'antd'

export const GearList = (props) => {
    const currentCollection = props.collectionId

    const { gear, getGear, deleteGear, searchTerms } = useContext(GearContext)
    const [collectionGear, setCollectionGear] = useState([])

    const toastDelete = () => {
        message.success('Gear was deleted');
    }

    useEffect(() => {
        getGear()
            .then(setCollectionGear(gear.filter(gear => gear.collectionId === currentCollection)))
    }, [currentCollection])

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
            key: 'type',
            sorter: (a, b) => a.type.localeCompare(b.type)
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
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
            ),
            sorter: (a, b) => a.available.toString().localeCompare(b.available.toString())
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

                <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                    onConfirm={() => {
                        deleteGear(id)
                            .then(toastDelete())
                    }}
                >
                    <a href="#">Delete</a>
                </Popconfirm>
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