import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import EmailVerify from './components/auth/EmailVerify'
import ResetPassword from './components/auth/ResetPassword'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App