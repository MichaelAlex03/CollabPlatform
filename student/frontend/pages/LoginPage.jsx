import React from 'react';
import Footer from '../components/Footer';
import LoginHeader from '../components/LoginHeader.jsx';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();


    const handleSignUpClick = () => {
        navigate('/register');
    }

    return (
    <main class="font-fam text-gray-800 bg-white">
        <LoginHeader />
        <div className="flex justify-center items-center h-screen bg-zinc-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl text-center font-semibold mb-6">Log In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div className="mb-4">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-gray-700">Remember Me</label>
                        <label><a href="#" className="text-gray-700 float-right">Forgot Password?</a></label>
                    </div>
                    <button type="submit" className="w-full bg-[#501214] hover:bg-[#7d1c1f] text-white p-2 rounded">Log In</button>
                    <label className="block text-center text-gray-700 mt-4">Don't have an account? <button onClick={handleSignUpClick} className="text-gray-700 mt-4">Sign Up</button> </label>
                </form>
            </div>
        </div>
        <Footer />
    </main>
    );
}

export default LoginPage;