import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Row, Col, Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Register = () => {
    const firstName = useRef(null)
    const lastName = useRef(null)
    const username = useRef(null)
    const history = useHistory()

    const warning = () => {
        message.warning('Username already exists');
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.state.value}`)
            .then(res => res.json())
    }

    const handleRegister = () => {
        existingUserCheck()
            .then(console.log(username.current.state.value))
            .then(exists => {
                if (exists[0] === undefined) {
                    fetch('http://localhost:8088/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: `${firstName.current.state.value} ${lastName.current.state.value}`,
                            username: `${username.current.state.value}`,
                            photo: undefined,
                            admin: false
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty('id')) {
                                localStorage.setItem('stockpileUser', createdUser.id)
                                history.push('/')
                            }
                        })
                } else {
                    warning()
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
                    onFinish={handleRegister}
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