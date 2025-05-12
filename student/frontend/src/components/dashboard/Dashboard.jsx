import React, { useState, useEffect } from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar'



const LOGOUT_URL = '/auth/logout'
const STUDENT_URL = '/api/student'

const Dashboard = () => {

  const { setAuth, auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [errMsg, setErrMsg] = useState('');
  const [studentProfile, setStudentProfile] = useState({});
  const [refresh, setRefresh] = useState(0)

  console.log(auth)

  const fetchUser = async () => {
    try {
      const response = await axiosPrivate.get(STUDENT_URL + `/${auth.aNum}`);
      setStudentProfile(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async () => {
    try {

    } catch (error) {

    }
  }

  const handleLogout = async () => {
    try {
      setAuth({});
      await axios.get(LOGOUT_URL, {
        withCredentials: true
      });
      navigate('/login', { replace: true });
    } catch (err) {
      setErrMsg('Error logging out');
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [refresh])

  console.log(studentProfile)


  return (
    <>
      <div className='absolute w-full flex justify-end'>
        <div className='bg-black rounded-full'>
          Test
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pb-10 pl-10 pr-10 w-full h-full gap-8'>

        <h1 className='w-full text-left text-3xl font-bold mb-10'>Edit Your Profile</h1>

        <div className='flex flex-row w-full gap-8'>
          <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl p-6 flex flex-col items-center flex-1/3 h-1/3">
            <div className="bg-gray-500 rounded-full p-6 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition relative h-1/3">
              <FontAwesomeIcon icon={faCamera} className="text-white text-2xl" />
            </div>
            <div className='flex flex-col items-center absolute'>
              <input type='file' className='opacity-0 h-0' id='fileUpload' />
              <label htmlFor='fileUpload'>Upload Photo</label>
            </div>
          </div>

          <div className='bg-white/80 backdrop-blur-md shadow-2xl border border-gray-400 rounded-xl p-6 grid grid-cols-2 w-2/3 gap-2'>

            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Full Name</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>A#</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Expected Graduation</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Year</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Degree</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Degree Completed</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Department</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Phone Number</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Worked Hours</label>
            </div>
            <div className='relative p-4'>
              <input
                type='text'
                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
              />
              <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Projects</label>
            </div>



          </div>

        </div>


      </div>
    </>
  )
}

export default Dashboard