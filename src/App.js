import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Dashboard } from './components/dashboard/Dashboard'

import './App.sass'

function App() {
  return (
    <HashRouter basename='/'>
      <Route
        render={() => {
          if (localStorage.getItem("stockpileUser")) {
            return (
              <Dashboard />
            )
          } else {
            return <Redirect to="/login" />
          }
        }}
      />

      <Route exact path='/login'>
        <Login />
      </Route>

      <Route exact path='/register'>
        <Register />
      </Route>
    </HashRouter>
  )
}

export default App;