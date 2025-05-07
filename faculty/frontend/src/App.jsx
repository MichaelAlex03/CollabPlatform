import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Register'
import Home from './pages/Home'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import { AuthProvider } from '../context/AuthProvider'
import PersistLogin from './components/PersistLogin'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>

            {/*Public Routes*/}
            <Route path='/' element={<LandingPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />

            {/*Purotected Routes*/}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path='home' element={<Home />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
