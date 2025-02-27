import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStage1 from './FormStage1';
import FormStage2 from './FormStage2';
import FormStage3 from './FormStage3';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {

    const navigate = useNavigate();

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
        degree: 'Select your degree',
        department: '',
        phoneNum: '',
        workedHrs: 0,
        projects: '',
        jobs: '',
        links: [],
        refernce: ''
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
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const submitForm = (e) => {
        e.preventDefault();
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

                <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#501214] text-center'> Profile Creation</h1>

                {formStage === 1
                    ? <p className='xl:text-xl text-base mt-2 font-semibold text-center'>Select the following skills that you have</p>
                    : <p className='xl:text-xl text-base mt-2 font-semibold text-center'>Please fill out the information below</p>}

                <div className='mt-4 w-full'>
                    {formStage === 1 && (<FormStage1 skillsData={skillsData} handleSkillsChange={handleSkillsChange} />)}
                    {formStage === 2 && (<FormStage2 formData={formData} handleFormChange={handleFormChange} />)}
                    {formStage === 3 && (<FormStage3 formData={formData} handleFormChange={handleFormChange}/>)}
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