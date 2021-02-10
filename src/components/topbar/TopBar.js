import React from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, message } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

const { Header } = Layout

export const TopBar = () => {
    const history = useHistory()
    const logout = () => {
        return localStorage.removeItem('stockpileUser')
    }

    const toastLogout = () => {
        message.success('See you again soon!');
    }

    return (
        <Header id='mainHeader' className='site-layout-background'>
            <h1>Stockpile</h1>

            <Button type="primary" icon={<LogoutOutlined />} shape='circle'
                onClick={() =>
                    logout().then(history.push('/')).then(toastLogout())
                } />
        </Header>
    )
}
