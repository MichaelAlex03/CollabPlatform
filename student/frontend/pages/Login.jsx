import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import LoginHeader from '../components/LoginHeader.jsx';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios.js';
import useAuth from '../hooks/useAuth.js';

const LOGIN_URL = '/auth/login';

const LoginPage = () => {
    const navigate = useNavigate();

    const { setAuth, auth, setPersist, persist } = useAuth();
    console.log("AUTH: ", auth)
    console.log("Access Token: " + auth?.accessToken)

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [errMsg, setErrMsg] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            navigate('/dashboard');
        }
    }, [isSubmitted]);

    useEffect(() => {
        localStorage.setItem("persist", persist)
    }, [persist])
    
    const handleSignUpClick = () => {
        navigate('/register');
    }

    const togglePersist = () => {
        setPersist(prev => !prev)
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, {
                email,
                pass,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            setAuth({
                email,
                aNum: response.data.aNum,
                accessToken: response.data.accessToken,
                firstTime: response.data.firstTime,
            });

            setIsSubmitted(true);

            setEmail('');
            setPass('');

        } catch (err) {
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

    return (
        <main class="font-fam text-gray-800 bg-white">
            <LoginHeader />
            <div className="flex justify-center items-center h-screen bg-zinc-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl text-center font-semibold mb-6">Log In</h2>
                    {errMsg && <p className='text-center text-sm md:text-base font-bold text-red-500 m-2'>{errMsg}</p>}
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input type="checkbox" className="mr-2" onChange={togglePersist} checked={persist}/>
                            <label className="text-gray-700">Trust This Device</label>
                            <label><a href="#" className="text-gray-700 float-right">Forgot Password?</a></label>
                        </div>
                        <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded" onClick={handleLogin}>Log In</button>
                        <label className="block text-center text-gray-700 mt-4">Don't have an account? <button type='button' onClick={handleSignUpClick} className="text-gray-700 mt-4">Sign Up</button> </label>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default LoginPage;