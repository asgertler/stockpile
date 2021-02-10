import React, { useContext } from 'react'
import { GearContext } from './GearProvider'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const GearSearch = () => {
    const { setSearchTerms } = useContext(GearContext)

    return (
        <Input placeholder onKeyUp={(e) => setSearchTerms(e.target.value)} prefix={<SearchOutlined />} />
    )
}