import React, { useState } from 'react';
import Footer from '../components/Footer';
import LogHeader from '../components/LoginHeader';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const LOGIN_URL = '/auth/login'

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = () => {

        axios.post(LOGIN_URL, {
            email,
            pass
        })
        navigate('/')
        setEmail('');
        setPass('');
        
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
                        <div className="mb-4 flex flex-row items-center w-full">
                            <input type="checkbox" className="mr-2" />
                            <label className="text-gray-700 text-sm mr-auto md:text-base lg:text-lg">Remember Me</label>
                            <label><a href="#" className="text-gray-700 text-sm mr-auto md:text-base lg:text-lg">Forgot Password?</a></label>
                        </div>
                        <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded" onClick={() => handleLogin}>Log In</button>
                        <label className="block text-center text-gray-700 mt-4">Don't have an account? <button onClick={handleSignUpClick} className="text-gray-700 mt-4">Sign Up</button> </label>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default LoginPage;