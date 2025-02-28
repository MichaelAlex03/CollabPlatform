import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginHeader = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <header className="bg-white border-b-4 border-[#501214] sticky top-0 z-50 shadow-md">
            <lognav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <label className="text-[#501214] text-xl font-semibold no-underline">Texas State University</label>
                <div className="hidden md:flex gap-8">
                    <button onClick={() => handleClick('process')} className="text-gray-800 font-medium hover:text-[#501214]">Home</button>
                </div>
            </lognav>
        </header>
    )
}

export default LoginHeader