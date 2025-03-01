import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import FormStage1 from './FormStage1';
import FormStage2 from './FormStage2';
import FormStage3 from './FormStage3';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../hooks/useAuth';

const PROFILE_URL = '/api/student'

const Form = () => {

    const navigate = useNavigate();
    const { auth } = useAuth()

    const [formStage, setFormStage] = useState(1);
    const [errMsg, setErrMsg] = useState('');

    //Skills data from checkboxes
    const [skillsData, setSkillsData] = useState({
        neural_networks: false,
        LLM: false,
        data_analysis: false,
        MERN: false,
        web_designer: false,
        jira: false,
        cplus: false,
        java: false,
        python: false,
        sql: false
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
        reference: ''
    });

    //Handles state changed for the skills sections
    const handleSkillsChange = (e) => {
        const { name, checked } = e.target;
        setSkillsData(prevSkills => ({
            ...prevSkills,
            [name]: checked
        }));
    }

    //Handles state being changed for non skills section
    const handleFormChange = (e) => {
        const { name, value, id } = e.target;
        setFormData(prevData => {
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
            const updatedLinks = formData.links || [];
            if (updatedLinks.length >= id + 1) {
                updatedLinks[id] = '';
            }
            return {
                ...prevData,
                links: updatedLinks
            }
        })
    }

    console.log(formData)
    console.log(skillsData)
    const submitForm = async (e) => {
        e.preventDefault();

        const axiosPrivate = useAxiosPrivate(); //use private instance that sets header with access token
        try {
            await axiosPrivate.post(PROFILE_URL, {
                id: auth.id,
                skillsData,
                formData
            })

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

        } catch (error) {
            setErrMsg('Profile creation could not be complete');
        }
    }


    return (
        <>
            <button
                className='absolute top-4 left-4 font-bold text-sm md:text-base xl:text-lg'
                onClick={() => navigate('/register')}
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='mr-2'
                />
                Back To Login
            </button>

            <form
                className="text-gray-800 bg-white flex flex-col p-10 items-center w-full md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 m-auto"
                onSubmit={submitForm}
            >

                <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#501214] text-center mt-4 md:mt-0'> Profile Creation</h1>

                {formStage === 1
                    ? <p className='xl:text-xl text-base mt-2 font-semibold text-center'>Select the following skills that you have</p>
                    : <p className='xl:text-xl text-base mt-2 font-semibold text-center'>Please fill out the information below</p>}

                {errMsg && <p className='text-center text-sm md:text-base font-bold text-red-500 m-2'>{errMsg}</p>}

                <div className='mt-4 w-full'>
                    {formStage === 1 && (<FormStage1 skillsData={skillsData} handleSkillsChange={handleSkillsChange} />)}
                    {formStage === 2 && (<FormStage2 formData={formData} handleFormChange={handleFormChange} />)}
                    {formStage === 3 && (<FormStage3 formData={formData} handleFormChange={handleFormChange} deleteLink={deleteLink} />)}
                </div>

                <div className={`flex flex-row gap-8 ${formStage === 1 ? 'justify-end' : 'justify-evenly'} mt-8 w-full`}>
                    {formStage !== 1 &&
                        (
                            <button
                                type='button'
                                className='bg-[#501214] p-2 w-1/3 text-white transition transform duration-300 hover:scale-110 rounded-lg '
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
                                className='bg-[#501214] p-2 w-1/3 text-white transition transform duration-300 hover:scale-110 rounded-lg'
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
                                className='bg-[#501214] p-2 w-1/3 text-white transition transform duration-300 hover:scale-110 rounded-lg'
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