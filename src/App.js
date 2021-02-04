import React from 'react'

import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Sidebar } from './components/sidebar/Sidebar'
import { TopBar } from './components/topbar/TopBar'
import { Foot } from './components/footer/Foot'

import { Layout } from 'antd'

const { Content } = Layout

function App() {
  return (
    <Layout>
      <Sidebar />

      <Layout className='site-layout'>
        <TopBar />

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Login />
          <Register />
        </Content>

        <Foot />
      </Layout>
    </Layout>
  );
}

export default App;
