import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Register = props => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(res => res.json)
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = e => {
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem('stockpileUser', exists.id)
                    // history.push("/")
                } else {

                }
            })
    }
    return (
        <Row justify='center' align='middle' className='auth-container'>
            <Col xs={24} lg={12} className='auth-form-container'>
                <h2>Register</h2>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleLogin}
                >
                    <Form.Item
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="First Name" ref={firstName} />
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="lastName" ref={lastName} />
                    </Form.Item>

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
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}