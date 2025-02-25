import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStage1 from './FormStage1';

const Form = () => {

    const navigate = useNavigate();

    const [skillsData, setSkillsData] = useState({
        neural_networks: false,
        LLM: false,
    });

    const [formStage, setFormStage] = useState(1);
    const [errMsg, setErrMsg] = useState('');

    const handleSignInClick = () => {
        navigate('/login');
    }

    return (
        <form className="text-gray-800 bg-white flex flex-col p-10 items-center xl:w-1/4 m-auto">

            <h1 className='text-3xl font-bold text-[#501214] text-center'> Profile Creation</h1>

            {formStage === 1 && (<p className='text-lg'>Select the following skills that you have:</p>)}

            <div className='mt-4'>
                {formStage === 1 && (<FormStage1 />)}
            </div>

            {/* Render nav buttons */}
            <div className='flex flex-row gap-8 justify-end mt-8 w-full'>
                {formStage !== 1 &&
                    (<button className='bg-[#501214] text-white px-10 py-1' onClick={() => setFormStage(prevStage => prevStage - 1)}>
                        Previous
                    </button>)
                }

                {formStage !== 3 &&
                    (<button
                        type='button'
                        className='bg-[#501214] p-2 w-1/3 text-white transition transform duration-300 hover:scale-110' onClick={() => setFormStage(prevStage => prevStage + 1)}>
                        Next
                    </button>)
                }

                {formStage === 3 &&
                    (<button>
                        Done
                    </button>)
                }
            </div>

            <div className='flex gap-3 mt-4'>
                <button
                    className={` h-3 ${formStage === 1 ? 'w-8 bg-[#501214]' : 'w-3 bg-gray-400'} rounded-full`}
                />
                <button
                    className={` h-3 ${formStage === 2 ? 'w-8 bg-[#501214]' : 'w-3 bg-gray-400'} rounded-full`}
                />
                <button
                    className={` h-3 ${formStage === 3 ? 'w-8 bg-[#501214] ' : 'w-3 bg-gray-400'} rounded-full`}
                />
            </div>

        </form>
    );
}

export default Form;