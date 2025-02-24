import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider'
import Register from '../pages/Register'


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
