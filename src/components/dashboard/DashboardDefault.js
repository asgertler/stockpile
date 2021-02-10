import React from 'react'

import { Row, Col } from 'antd'

export const DashboardDefault = () => {
    return (
        <Row justify='center' align='middle' className='default-row'>
            <Col className='default-col'>
                <h2>Welcome to Stockpile!</h2>

                <p>Click on one of your collections in the sidebar to see your list of gear, or click the plus to add a new one!</p>
            </Col>
        </Row>
    )
}