import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const REGISTER_URL = 'auth/register'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@txstate\.edu$/;

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pass, setPass] = useState('');
    const [passFocus, setPassFocus] = useState(false);
    const [validPass, setValidPass] = useState(false);

    const [confirmPass, setConfirmPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');


    //Checks if password matches the confirm password field
    useEffect(() => {
        setValidPass(PWD_REGEX.test(pass))
        setValidMatch(confirmPass === pass)
    }, [confirmPass, pass])

    //Check if email is valid
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    const handleSignInClick = () => {
        navigate('/login');
    }

    const handleRegister = async (e) => {
        e.preventDefault(); //Prevents browser from refreshing form and losing all data

        //Checks if any of the fields are empty
        if (!name || !id || !email || !pass || !confirmPass) {
            setErrMsg('All fields are required');
            return;
        }

        //Check if email is valid
        if (!validEmail) {
            setErrMsg("Invalid Email Address! Please look at requirements when clicking email field")
            return;
        }

        //Check if password is valid
        if (!validPass) {
            setErrMsg('Invalid Password please look at requirements');
            return;
        }

        //Check if passwords match
        if (!validMatch) {
            setErrMsg('Password and Confirm Pass dont match');
            return;
        }

        try {
            await axios.post(REGISTER_URL, {
                id,
                user: name,
                pass,
                email
            })

            navigate('/');

            //Set all fields back to empty
            setName('');
            setEmail('');
            setConfirmPass('');
            setId('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No response from server');
            } else if (err.response?.status === 409) {
                setErrMsg('Student already exists');
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid Id Entry. Make sure your following format A########');
            } else {
                setErrMsg('Registration Failed');
            }
        }

    }

    return (
        <main className="font-fam text-gray-800 bg-white">

            <div className="flex flex-col justify-center items-center h-screen bg-zinc-100 p-4 md:p-0">
                <div className="bg-white p-8 rounded shadow-md w-full md:max-w-md m-auto ">
                    <h2 className="text-2xl text-center font-semibold mb-6">Sign Up</h2>
                    {errMsg && <p className='text-center text-sm md:text-base font-bold text-red-500 m-2'>{errMsg}</p>}
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-black text-sm md:text-base lg:text-lg">Name</label>
                            <input
                                id='name'
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor='idNum' className="text-black text-sm md:text-base lg:text-lg">ID Number (A#)</label>
                            <input
                                name='idNum'
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor='email' className="text-black text-sm md:text-base lg:text-lg">Texas State Email</label>
                            <input
                                id='email'
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                autoComplete='false'
                            />
                            {emailFocus && !validEmail && (

                                <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row'>
                                    <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="mr-2"
                                        size="lg"
                                    />
                                    <p className='text-xs md:text-sm'>Email must end in @txstate.edu <br />
                                        Allowed characters: letters, numbers, . _ % + - </p>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor='pass' className="text-black text-sm md:text-base lg:text-lg">Password</label>
                            <input
                                id='pass'
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                            />
                            {passFocus && !validPass && (
                                <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row'>
                                    <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="mr-2"
                                        size="lg"
                                    />
                                    <p className='text-xs md:text-sm'>Password must be 8-24 characters<br />
                                        At least 1 capital letter, 1 lowercase, 1 digit<br />
                                        And 1 special character from the following(!@#$%)</p>
                                </div>
                            )}
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
                                <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row'>
                                    <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="mr-2"
                                        size="lg"
                                    />
                                    <p className='text-xs md:text-sm'>Passwords dont match</p>
                                </div>
                            )}
                        </div>
                        <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded text-md md:text-base lg:text-lg" onClick={handleRegister}>Sign Up</button>
                        <label className="block text-center text-gray-700 mt-4 text-md md:text-base lg:text-lg">Already have an account? <button onClick={handleSignInClick} className="text-gray-700 mt-4">Sign In</button> </label>
                    </form>
                </div>
            </div>

        </main>
    );
}

export default Register;