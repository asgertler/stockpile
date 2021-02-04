import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

export const CollectionCard = ({ collection }) => {
    return (
        <Menu.Item key={collection.id} icon={<AppstoreOutlined className='sidebar-links' />}>
            <Link to={`/collection/${collection.id}`}>
                {collection.name}
            </Link>
        </Menu.Item>
    )
}