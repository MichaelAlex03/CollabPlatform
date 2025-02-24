import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStage1 from './FormStage1';



const Form = () => {

    const navigate = useNavigate();

    const [formStage, setFormStage] = useState(1)
    const [errMsg, setErrMsg] = useState('');



    const handleSignInClick = () => {
        navigate('/login');
    }


    return (
        <section className="font-fam text-gray-800 bg-white flex flex-col items-center">
            
            <div>
                <h1 className='text-2xl font-semibold'> Profile Creation</h1>
            </div>
        
            <FormStage1 />  
                
            
        </section>
    );
}

export default Form;