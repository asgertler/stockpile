import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

export const CollectionCard = ({ collection }) => {
    return (
        <Menu.Item key='1' icon={<AppstoreOutlined />} id={collection.id}>
            <Link to={`/collection/${collection.id}`}>
                {collection.name}
            </Link>
        </Menu.Item>
    )
}