import React from 'react'

import { Layout, Button, Popover } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

const { Header } = Layout

export const TopBar = () => {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <Header id='mainHeader' className='site-layout-background'>
            <h1>Stockpile</h1>

            <Popover placement='left' content='Sign Out'>
                <Button type="primary" icon={<LogoutOutlined />} shape='circle'
                    onClick={logout} />
            </Popover>
        </Header>
    )
}
