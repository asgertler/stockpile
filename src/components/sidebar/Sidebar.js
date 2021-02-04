import React from 'react'

import { CollectionList } from '../collection/CollectionList'

import { Layout } from 'antd'

const { Sider } = Layout

export const Sidebar = () => {
    return (
        <Sider id='sidebarMain' style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }} collapsible >
            <div id='logo' />

            <CollectionList />
        </Sider>
    )
}