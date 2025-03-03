import React, { useState } from 'react';
import Footer from '../components/Footer';
import LogHeader from '../components/LoginHeader';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const LOGIN_URL = '/auth/login';

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [errMsg, setErrMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, {
                email,
                pass
            });
            console.log(response);
            navigate('/');
            setEmail('');
            setPass('');
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrMsg('No response from server');
            } else if (err.response?.status === 401) {
                setErrMsg('Email and/or Password is wrong');
            } else if (err.response?.status === 400) {
                setErrMsg('Email and Password required');
            } else {
                setErrMsg('Registration Failed');
            }
        }


    }

    const handleSignUpClick = () => {
        navigate('/signup');
    }

    return (
        <main className="font-fam text-gray-800 bg-white">
            <LogHeader />
            <div className="flex justify-center items-center h-screen bg-zinc-100 p-6">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl text-center font-semibold mb-6">Log In</h2>
                    {errMsg && <p className='text-center text-sm md:text-base font-bold text-red-500 m-2'>{errMsg}</p>}
                    <form>
                        <div className="mb-4">
                            <label htmlFor='email' className="text-black text-sm md:text-base lg:text-lg">Email</label>
                            <input
                                id='email'
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='pass' className="text-black text-sm md:text-base lg:text-lg">Password</label>
                            <input
                                id='pass'
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 flex flex-row items-center w-full">
                            <input type="checkbox" className="mr-2" />
                            <label className="text-black text-sm mr-auto md:text-base lg:text-lg">Remember Me</label>
                            <label><a href="#" className="text-black text-sm mr-auto md:text-base lg:text-lg">Forgot Password?</a></label>
                        </div>
                        <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded  text-md md:text-base lg:text-lg" onClick={handleLogin}>Log In</button>
                        <label className="block text-center text-gray-700 mt-2 text-md md:text-base lg:text-lg">Don't have an account? <button onClick={handleSignUpClick} className="text-gray-700 mt-4">Sign Up</button> </label>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default LoginPage;