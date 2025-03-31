import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Register'
import ProjectCreate from './pages/ProjectCreation'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/projectcreate' element={<ProjectCreate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
