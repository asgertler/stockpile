import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const Login = (props) => {
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
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