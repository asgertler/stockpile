import React from 'react'

import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Sidebar } from './components/sidebar/Sidebar'
import { TopBar } from './components/topbar/TopBar'

import { Layout } from 'antd'

const { Content, Footer } = Layout

function App() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <Layout>
      <Sidebar />

      <Layout className='site-layout'>
        <TopBar />

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
