import React from 'react'
import Form from '../components/profileCreation/Form'
import Dashboard from '../components/dashboard/Dashboard'
import useAuth from '../../hooks/useAuth'

const Home = () => {

  const { auth } = useAuth();
  console.log(auth.aNum, auth.email, auth.accessToken, auth.firstTime)

  return (
    <main className='flex w-screen h-screen'>
      {auth.firstTime ? <Form /> : <Dashboard />}
    </main>
  )
}

export default Home