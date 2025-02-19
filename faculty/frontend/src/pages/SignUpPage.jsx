import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import LogHeader from '../components/LoginHeader';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const REGISTER_URL = 'auth/register'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpPage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [id, setId] = useState('');

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [confirmPass, setConfirmPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');


    //Checks if password matches the confirm password field

    const handleSignInClick = () => {
        navigate('/login');
    }

    const handleRegister = (e) => {
        e.preventDefault(); //Prevents browser from refreshing form and losing all data

        //Checks if any of the fields are empty
        if (!name || !department || !id || !email || !pass || !confirmPass) {
            setErrMsg('All fields are required');
            return;
        }

        if (!validMatch) {
            setErrMsg('Password and Confirm Pass dont match')
            return;
        }

        axios.post(REGISTER_URL, {
            id,
            name,
            pass, 
            department,
            email
        })

        navigate('/')

        //Set all fields back to empty
        setName('');
        setEmail('');
        setConfirmPass('');
        setId('');
        setDepartment('');



    }

    return (
        <main className="font-fam text-gray-800 bg-white">
            <LogHeader />
            <div className="flex flex-col justify-center items-center bg-zinc-100 p-10">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl text-center font-semibold mb-6">Sign Up</h2>
                    {errMsg && <p className='text-center font-bold text-red-500'>{errMsg}</p>}
                    <form>
                        <div className="mb-4">
                            <label className="text-black text-sm md:text-base lg:text-lg">Name</label>
                            <input
                                type="name"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-sm md:text-base lg:text-lg">Department</label>
                            <input
                                type="department"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-sm md:text-base lg:text-lg">ID Number</label>
                            <input 
                                type="anum" 
                                className="w-full p-2 border border-gray-300 rounded mt-1" 
                                value={id}
                                onChange={(e) => setId(e.target.value)}  
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-sm md:text-base lg:text-lg">Texas State Email</label>
                            <input 
                                type="email" 
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}   
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-sm md:text-base lg:text-lg">Password</label>
                            <input 
                                type="password" 
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}   
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-black text-sm md:text-base lg:text-lg">Confirm Password</label>
                            <input 
                                type="password" 
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}   
                            />
                            {matchFocus && !validMatch && confirmPass && (
                                <p className='font-bold text-red-500'>Passwords Don't Match</p>
                            )}
                        </div>
                        <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded text-md md:text-base lg:text-lg" onClick={handleRegister}>Sign Up</button>
                        <label className="block text-center text-gray-700 mt-4 text-md md:text-base lg:text-lg">Already have an account? <button onClick={handleSignInClick} className="text-gray-700 mt-4">Sign In</button> </label>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default SignUpPage;