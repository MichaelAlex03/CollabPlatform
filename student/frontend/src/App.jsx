import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider'
import Register from '../pages/Register'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import Layout from '../components/Layout'
import RequireAuth from '../components/RequireAuth'
import PersistLogin from '../components/PersistLogin'


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>

            {/*Public Routes*/}
            <Route path='/' element={<LandingPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<Register />} />

            {/*Protected Routes and Allow Peristent Login to these routes*/}
            <Route path='/' element={<PersistLogin />}>
              <Route path='/' element={<RequireAuth />}>
                <Route path='dashboard' element={<Home />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
