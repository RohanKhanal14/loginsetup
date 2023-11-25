import React from 'react'
import Signin from './Signin'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Frame = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/signin" exact Component={Signin} />
        <Route path="/login" exact Component={Login} />
        </Routes>
      </Router>
    </>
  )
}

export default Frame