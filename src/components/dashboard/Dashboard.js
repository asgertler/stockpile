import React from 'react'

import { Sidebar } from '../sidebar/Sidebar'
import { TopBar } from '../topbar/TopBar'
import { Foot } from '../footer/Foot'

import { DashboardViews } from './DashboardViews'
import { CollectionProvider } from '../collection/CollectionProvider'

import { Layout } from 'antd'

const { Content } = Layout

export const Dashboard = () => {
    return (
        <Layout>
            <CollectionProvider>
                <Sidebar />

                <Layout className='site-layout'>
                    <TopBar />

                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <DashboardViews />
                    </Content>

                    <Foot />
                </Layout>
            </CollectionProvider>
        </Layout>
    )
}