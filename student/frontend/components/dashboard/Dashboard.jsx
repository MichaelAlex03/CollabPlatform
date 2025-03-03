import React, { useState, useEffect } from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const LOGOUT_URL = '/auth/logout'

const Dashboard = () => {
  const navigate = useNavigate();
  const { setAuth, auth } = useAuth();

  const [errMsg, setErrMsg] = useState('');

  const handleLogout = async () => {
    try {
      await axios.get(LOGOUT_URL);
      navigate('/login');
      setAuth({});
    } catch (err) {
      setErrMsg('Error logging out');
      console.log(err)
    }
  }


  return (
    <div><button
      className='absolute top-4 left-4 font-bold text-sm md:text-base xl:text-lg'
      onClick={handleLogout}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className='mr-2'
      />
      Back To Login
    </button>Testtt</div>
  )
}

export default Dashboard