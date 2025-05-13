import React, { useState, useEffect } from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import EditProfile from './EditProfile';
import EditSkills from './EditSkills';

const LOGOUT_URL = '/auth/logout'
const STUDENT_URL = '/api/student'

const Dashboard = () => {

  const { setAuth, auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [errMsg, setErrMsg] = useState('');
  const [localProfile, setLocalProfile] = useState({});
  const [serverProfile, setServerProfile] = useState({});
  const [refresh, setRefresh] = useState(0)
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  const [studentSkills, setStudentSkills] = useState([]);
  const [skillsData, setSkillsData] = useState({

    //Programming languages
    css: 'none',
    javascript: 'none',
    html: 'none',
    csharp: 'none',
    c: 'none',
    cplus: 'none',
    java: 'none',
    python: 'none',
    sql: 'none',

    //Tech stacks
    MERN: 'none',
    MEAN: 'none',
    PERN: 'none',
    MEVN: 'none',
    LAMP: 'none',
    JAM: 'none',
    NET: 'none',

    //AI and Data Science
    machineLearning: 'none',
    deepLearning: 'none',
    naturalLanguageProccessing: 'none',
    computerVision: 'none',
    reinforcementLearning: 'none',
    neuralNetworks: 'none',
    dataEngineering: 'none',

    //Project Management
    agile: 'none',
    jira: 'none',
    trello: 'none',


    //Databases
    mySQL: 'none',
    postgreSQL: 'none',
    mongoDB: 'none',
    oracleDB: 'none',
    dynamoDB: 'none',

    //Frameworks and Libraries
    react: 'none',
    angular: 'none',
    vue: 'none',
    node: 'none',
    express: 'none',
    django: 'none',
    springBoot: 'none',
    flask: 'none',
    aspNet: 'none',
    tensorFlow: 'none',
    pyTorch: 'none',
    nextJs: 'none'

  });

  console.log(auth)

  const fetchUser = async () => {
    try {
      const response = await axiosPrivate.get(STUDENT_URL + `/${auth.aNum}`);
      setServerProfile(response.data.student);
      setLocalProfile(response.data.student);
      setStudentSkills(response.data.student.skills);


    } catch (error) {
      console.log(error)
    }
  }

  const handleSave = async () => {
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

  const handleFormChange = (e) => {
    setLocalProfile({ ...localProfile, [e.target.name]: e.target.value });
  }

  const handleSkillsChange = (e) => {

  }

  const handleShowSkills = () => {
    setShowProfile(false);
    setShowSkills(true)
  }

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowSkills(false);
  }

  const compareLocalVsServer = (local, server) => {
    for(let key in local){
      const localVal = local[key];
      const serverVal = server[key];

      if(localVal !== serverVal){
        return false
      }
    }

    return true
  }

  useEffect(() => {
    setReadyToSubmit(!compareLocalVsServer(localProfile, serverProfile));
  }, [localProfile])

  useEffect(() => {
    fetchUser();
  }, [refresh])



  return (
    <>
      {/* <div className='absolute w-full flex justify-end'>
        <div className='bg-black rounded-full'>
          Test
        </div>
      </div> */}

      <div className='flex flex-col items-center justify-center w-full p-6 gap-4'>

        <div className='w-full'>
          {showProfile
            ? <h1 className='text-left text-3xl font-bold mb-10'>Edit Your Profile</h1>
            : <h1 className='text-left text-3xl font-bold mb-5'>Edit Your Skills</h1>
          }

        </div>

        <div className='flex w-full min-h-[600px]'>
          {/* Form Component */}
          {showProfile && (
            <div className='flex flex-col w-full'>
              <EditProfile
                localProfile={localProfile}
                serverProfile={serverProfile}
                handleChange={handleFormChange}
              />
              <div className='w-full flex flex-row justify-end gap-4 mt-4 p-4'>
                <div
                  className={readyToSubmit
                    ? 'w-1/8 flex flex-row justify-center bg-[#501214] border border-gray-400 rounded-xl p-2'
                    : 'w-1/8 flex flex-row justify-center bg-[#501214] border-2 border-gray-400 rounded-xl p-2 opacity-70'
                  }
                >
                  <button disabled={readyToSubmit} className='text-white'>Save</button>
                </div>
                <div className='w-1/8 flex flex-row justify-center bg-[#501214] border border-gray-400 rounded-xl p-2'>
                  <button
                    className='text-white'
                    onClick={handleShowSkills}
                  >
                    Edit Skills Section
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Skills Component */}
          {showSkills && (
            <div className='flex flex-col w-full'>
              <EditSkills skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
              <div className='w-full flex flex-row justify-end gap-4 mt-4 p-4'>
                <div
                  className={readyToSubmit
                    ? 'w-1/8 flex flex-row justify-center bg-[#501214] border border-gray-400 rounded-xl p-2'
                    : 'w-1/8 flex flex-row justify-center bg-[#501214] border-2 border-gray-400 rounded-xl p-2 opacity-70'
                  }
                >
                  <button disabled={readyToSubmit} className='text-white'>Save Skills</button>
                </div>
                <div className='w-1/8 flex flex-row justify-center bg-[#501214] border border-gray-400 rounded-xl p-2'>
                  <button
                    className='text-white'
                    onClick={handleShowProfile}
                  >
                    Back to Profile
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>



    </>
  )
}

export default Dashboard