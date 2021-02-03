import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Row, Col, Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Login = () => {
    const username = useRef(null)
    const history = useHistory()

    const warning = () => {
        message.warning('Username does not exist');
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.state.value}`)
            .then(res => res.json())
            .then(console.log(username.current.state.value))
    }

    const handleLogin = () => {
        existingUserCheck()
            .then(exists => {
                if (exists !== undefined && exists !== false && exists.length > 0) {
                    // localStorage.setItem('stockpileUser', exists.id)
                    // history.push("/")
                    console.log(exists)
                } else {
                    warning()
                }
            })
    }

    return (
        <Row justify='center' align='middle' className='auth-container'>
            <Col xs={24} lg={12} className='auth-form-container'>
                <h2>Login</h2>

                <Form
                    name="normal_login"
                    className="login-form"
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
                                message: 'Please input your Username!',
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

                        <a className="login-form-forgot" href="">
                            Forgot username
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}