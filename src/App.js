import React from 'react'

import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Sidebar } from './components/Sidebar/Sidebar'

import { Layout } from 'antd'

const { Header, Content, Footer, Sider } = Layout

function App() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <Layout>
      <Sidebar />

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
