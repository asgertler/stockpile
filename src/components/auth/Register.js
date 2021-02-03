import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Register = props => {
    const username = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(res => res.json)
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = e => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem('stockpileUser', exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    const onFinish = (values) => {
        console.log('Received values of form:', values)
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
                    onFinish={onFinish}
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
                            placeholder="Username" />
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