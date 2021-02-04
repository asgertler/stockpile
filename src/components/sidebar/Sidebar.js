import React from 'react'

import { Layout, Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

const { Sider } = Layout

export const Sidebar = () => {
    return (
        <Sider id='sidebarMain' style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }} collapsible >
            <div id='logo' />

            <Menu theme='dark' mode='inline' id='sidebarMainUl'>
                <Menu.Item key='1' icon={<AppstoreOutlined />}>
                    First Stockpile
                </Menu.Item>
            </Menu>
        </Sider>
    )
}