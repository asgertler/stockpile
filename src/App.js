import React, { useState } from 'react'
import { render } from 'react-dom'

import { DatePicker, message } from 'antd'

import './App.css';

function App() {
  const [date, setDate] = useState(null)

  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`)
    setDate(value)
  }

  return (
    <div className="App" style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />

      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  );
}

export default App;
