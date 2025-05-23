import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import FormStage1 from './FormStage1';
import FormStage2 from './FormStage2';
import FormStage3 from './FormStage3';
import useFormRegex, { formNullCheck } from '../../../hooks/useFormRegex';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';

const PROFILE_URL = '/api/student'
const LOGOUT_URL = '/auth/logout'

const Form = () => {
    const axiosPrivate = useAxiosPrivate();

    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    const [formStage, setFormStage] = useState(1);
    const [errMsg, setErrMsg] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);


    //Skills data
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
        pyTorch:'none',
        nextJs: 'none'

    });

    //Form data not relating to skills
    const [formData, setFormData] = useState({
        studentName: '',
        expectedGrad: '',
        year: '',
        degree: 'Select your degree',
        degreeCompleted: 'Select your degree',
        department: '',
        phoneNum: '',
        workedHrs: '',
        projects: '',
        jobs: '',
        links: [],
        referenceName: '',
        referenceContactType: '',
        referencePhone: '',
        referenceEmail: '',
        resume: null,
        letterOfRec: null
    });

    //Handles state changed for the skills sections
    const handleSkillsChange = (e) => {
        const { name, value } = e.target;
        setSkillsData(prevSkills => ({
            ...prevSkills,
            [name]: value
        }));
    }

    //Handles state being changed for non skills section
    const handleFormChange = (e) => {
        console.log(e.target)
        const { name, value, id, type, files } = e.target;
        setFormData(prevData => {
            if (type === 'file') {
                return {
                    ...prevData,
                    [name]: files[0] // Store the file object
                };
            }
            if (name === 'links') {
                const updatedLinks = prevData.links || [];
                updatedLinks[id] = value;
                return {
                    ...prevData,
                    links: updatedLinks
                };
            }
            else if (name === 'year') {
                if (value !== 'graduate') {
                    return {
                        ...prevData,
                        year: value,
                        degreeCompleted: ''
                    }
                } else {
                    return {
                        ...prevData,
                        year: value,
                        degree: ''
                    }
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                };
            }
        })
    }

    const deleteLink = (id) => {
        setFormData(prevData => {
            const updatedLinks = formData.links;
            updatedLinks[id] = '';
            return {
                ...prevData,
                links: updatedLinks
            }
        })
    }

    const handleLogout = async () => {
        try {
            setAuth({});
            await axios.get(LOGOUT_URL, {
                withCredentials: true,
            });
            navigate('/login', { replace: true })
            console.log("Auth")
        } catch (err) {
            setErrMsg('Error logging out');
        }
    }

    //useEffect ensuring auth state gets set before going back to dashboard to correctly render other components
    useEffect(() => {
        if (isSubmitted) {
            navigate('/dashboard');
        }
    }, [isSubmitted]);

    
    const submitForm = async (e) => {
        e.preventDefault();

        //Makes sure at least one skill is selected
        if (Object.values(skillsData).every(skill => skill === "none")) {
            setErrMsg('Select at least one skill');
            setFormStage(3);
            return;
        }

        //Check if any non skills data is null
        const nullCheck = formNullCheck(formData)
        if (nullCheck) {
            setErrMsg("Missing required fields");
            setFormStage(1);
            return;
        }

        const regexCheck = useFormRegex(formData);

        //If there is a field with invalid format go to the stage of the form where that field is located
        if (regexCheck[0] !== "None") {
            setErrMsg(regexCheck[0]);
            setFormStage(regexCheck[1]);
            return;
        }



        try {

            const formDataToSend = new FormData();

            // Add files if they exist
            if (formData.resume) {
                formDataToSend.append('resume', formData.resume);
            }
            if (formData.letterOfRec) {
                formDataToSend.append('letterOfRec', formData.letterOfRec);
            }

            //Only send link fields that have value
            const updatedLinks = formData.links.filter(link => link != '');

            // Create a copy of formData without the file objects and updated links
            const formDataWithoutFiles = {
                ...formData,
                links: updatedLinks,
                resume: undefined,
                letterOfRec: undefined
            };

            //Filter out the skills that were none
            const skills = []
            Object.entries(skillsData).forEach(([key, value]) => {
                console.log(value)
                if (value !== 'none') {
                    skills.push({
                        name: key,
                        proficiency: value
                    });
                }
            });

            // Stringify JSON to access it from req.body in backend
            formDataToSend.append('id', auth.aNum);
            formDataToSend.append('skillsData', JSON.stringify(skills));
            formDataToSend.append('formData', JSON.stringify(formDataWithoutFiles));

            const response = await axiosPrivate.post(PROFILE_URL, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setAuth(prevAuth => ({
                ...prevAuth,
                firstTime: response.data.firstTime
            }));

            setIsSubmitted(true);

            //After form submits sets all field in skillData object to false to reset
            for (const key in skillsData) {
                setSkillsData(prevData => ({
                    ...prevData,
                    [key]: false
                }));
            };

            //After form submits sets all field in formData object to false to reset
            for (const key in formData) {
                setFormData(prevData => {
                    if (key === 'degree' || key === 'degreeCompleted') {
                        return {
                            ...prevData,
                            [key]: 'Select your degree'
                        }
                    } else {
                        return {
                            ...prevData,
                            [key]: ''
                        }
                    }
                });
            };
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No response from server');
                console.log("TESTTTT", err)
            } else {
                setErrMsg('Registration Failed');
                console.log("ERRRRRY", err)
            }
        }
    }


    return (
        <>
            <button
                className='absolute top-4 left-4 font-bold text-sm md:text-base xl:text-lg'
                onClick={handleLogout}
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='mr-2'
                />
                Back To Login
            </button>

            <form
                className={`text-gray-800 bg-white flex flex-col p-10 items-center m-auto
                    ${formStage === 3 
                        ? 'w-full md:w-3/4 lg:w-3/4 xl:w-4/5 2xl:w-1/2' // wider for skills
                        : 'w-full md:w-1/2 lg:w-1/2 xl:w-2/5 2xl:w-1/4'  // original width
                    }`}
                onSubmit={submitForm}
            >

                <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#501214] text-center mt-4 md:mt-0'> Profile Creation</h1>

                {formStage === 3
                    ? <p className='xl:text-lg text-base mt-2 font-semibold text-center'>Select the following skills that will be able to demonstrate</p>
                    : <p className='xl:text-lg text-base mt-2 font-semibold text-center'>Please fill out the information below</p>}

                {errMsg && <p className='text-center text-sm md:text-base font-bold text-red-500 m-2'>{errMsg}</p>}

                <div className='mt-4 w-full'>
                    {formStage === 1 && (<FormStage1 formData={formData} handleFormChange={handleFormChange} />)}
                    {formStage === 2 && (<FormStage2 formData={formData} handleFormChange={handleFormChange} deleteLink={deleteLink} />)}
                    {formStage === 3 && (<FormStage3 skillsData={skillsData} handleSkillsChange={handleSkillsChange} />)}
                </div>

                <div className={`flex flex-row gap-8 ${formStage === 1 ? 'justify-end' : 'justify-evenly'} mt-8 w-full`}>
                    {formStage !== 1 &&
                        (
                            <button
                                type='button'
                                className={`bg-[#501214] p-2 ${formStage === 3 ? 'w-1/3 lg:w-1/5' : 'w-1/3'} text-white text-center transition transform duration-300 hover:scale-110 rounded-lg`}
                                onClick={() => setFormStage(prevStage => prevStage - 1)}
                            >
                                Previous
                            </button>
                        )
                    }

                    {formStage !== 3 &&
                        (
                            <button
                                type='button'
                                className='bg-[#501214] text-center p-2 w-1/3 text-white transition duration-300 rounded-lg'
                                onClick={() => setFormStage(prevStage => prevStage + 1)}
                            >
                                Next
                            </button>
                        )
                    }

                    {formStage === 3 &&
                        (
                            <button
                                type='submit'
                                className='bg-[#501214] text-center p-2 w-1/3 lg:w-1/5 text-white transition transform duration-500 hover:scale-110 rounded-lg'
                            >
                                Done
                            </button>
                        )
                    }
                </div>

                <div className='flex gap-3 mt-6 w-full justify-center'>
                    <button
                        type='button'
                        className={` h-3 ${formStage === 1 ? 'w-8 bg-[#501214]' : 'w-3 bg-gray-400'} rounded-full`}
                        onClick={() => setFormStage(1)}
                    />
                    <button
                        type='button'
                        className={` h-3 ${formStage === 2 ? 'w-8 bg-[#501214]' : 'w-3 bg-gray-400'} rounded-full`}
                        onClick={() => setFormStage(2)}
                    />
                    <button
                        type='button'
                        className={` h-3 ${formStage === 3 ? 'w-8 bg-[#501214] ' : 'w-3 bg-gray-400'} rounded-full`}
                        onClick={() => setFormStage(3)}
                    />
                </div>

            </form>
        </>
    );
}

export default Form;