import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider'
import Register from '../pages/Register'
import Form from '../components/profileCreation/Form'


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/register' element={<Register />} />
          <Route path='/profileCreation' element={<Form />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
