import React from 'react'

import { Layout } from 'antd'

const { Footer } = Layout

export const Foot = () => {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <Footer style={{ textAlign: 'center' }}>
            Stockpile ©{year} Created by Aaron Gertler
        </Footer>
    )
}