import React from 'react'

import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'

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

const { Header, Content, Footer, Sider } = Layout

function App() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <Layout>
      <Sider id='sidebarMain' style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }} collapsible>
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

      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Login />
          <Register />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Stockpile ©{year} Created by Aaron Gertler
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
