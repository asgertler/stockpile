import React from 'react'

import { Layout, Menu } from 'antd'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'

const { Sider } = Layout

export const Sidebar = () => {
    return (
        <Sider id='sidebarMain' style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }} collapsible >
            <div id='logo' />

            <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} id='sidebarMainUl'>
                <Menu.Item key='1' icon={<UserOutlined />}>
                    nav 1
            </Menu.Item>

                <Menu.Item key='2' icon={<VideoCameraOutlined />}>
                    nav 2
            </Menu.Item>

                <Menu.Item key='3' icon={<UploadOutlined />}>
                    nav 3
            </Menu.Item>

                <Menu.Item key='4' icon={<BarChartOutlined />}>
                    nav 4
            </Menu.Item>

                <Menu.Item key='5' icon={<CloudOutlined />}>
                    nav 5
            </Menu.Item>

                <Menu.Item key='6' icon={<AppstoreOutlined />}>
                    nav 6
            </Menu.Item>

                <Menu.Item key='7' icon={<TeamOutlined />}>
                    nav 7
            </Menu.Item>

                <Menu.Item key='8' icon={<ShopOutlined />}>
                    nav 8
            </Menu.Item>
            </Menu>
        </Sider>
    )
}