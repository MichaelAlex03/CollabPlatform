import React from 'react';
import useAuth from '../../hooks/useAuth';
import ProjectCreation from '../components/ProjectCreation';
import Dashboard from '../components/Dashboard';

const Home = () => {

  const { auth } = useAuth();
  console.log(auth)

  return (
    <main>
      {auth?.firstTime ? <ProjectCreation /> : <Dashboard />}
    </main>
  )
}

export default Home