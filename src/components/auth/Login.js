import React, { useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { Row, Col, Form, Input, Button, message, Divider, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Login = () => {
    const username = useRef(null)
    const history = useHistory()

    const warning = () => {
        message.warning('Username does not exist');
    }

    const existingUserCheck = () => {
        return fetch(`https://stockpile-api.herokuapp.com/users?username=${username.current.state.value}`)
            .then(res => res.json())
    }

    const handleLogin = () => {
        existingUserCheck()
            .then(exists => {
                if (exists !== undefined && exists !== false && exists.length > 0) {
                    localStorage.setItem('stockpileUser', exists[0].id)
                    history.push("/")
                } else {
                    warning()
                }
            })
    }

    return (
        <Row justify='center' align='middle' className='auth-container'>
            <Col xs={24} lg={12} className='auth-form-container'>
                <div className='logo-container'>
                    <h1>Stockpile</h1>
                </div>

                <Divider />

                <h2>Login</h2>

                <Form
                    name="normal_login"
                    className="login-form"
                    layou='vertical'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleLogin}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username" ref={username} />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="unchecked" noStyle>
                            <Checkbox>I'm not a robot</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#">
                            Forgot username
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to='/register'>register now!</Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row >
    )
}