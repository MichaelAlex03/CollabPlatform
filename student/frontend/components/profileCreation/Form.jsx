import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStage1 from './FormStage1';



const Form = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        neural_networks: false,
        LLM: false,

    });

    const [formStage, setFormStage] = useState(1)
    const [errMsg, setErrMsg] = useState('');



    const handleSignInClick = () => {
        navigate('/login');
    }


    return (
        <form className="text-gray-800 bg-white flex flex-col items-center p-10 justify-center h-screen">

            <div>
                <h1 className='text-3xl font-semibold text-[#501214]'> Profile Creation</h1>
            </div>


            <div>
                {formStage === 1 && (<FormStage1 />)}
            </div>


            <div className='flex flex-row gap-8 justify-center'>
                <button onClick={() => setFormStage(prevStage => prevStage - 1)}>
                    <p>Previous</p>
                </button>
                <button>
                    <p>Next</p>
                </button>
            </div>
        </form>
    );
}

export default Form;