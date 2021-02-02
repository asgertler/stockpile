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

import './App.css';

const { Header, Content, Footer, Sider } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className='logo' />

          <Menu theme='dark' mode='inline' defaultSelectedKEys={['4']}>
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
      </Layout>
    </div>
  );
}

export default App;
