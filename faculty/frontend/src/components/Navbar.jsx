import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (div) => {
        if (!div){
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else{
            document.getElementById(div)?.scrollIntoView({behavior: 'smooth'});
        }
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <header className="bg-white border-b-4 border-[#501214] sticky top-0 z-50 shadow-md">
            <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <button onClick={handleHomeClick} className="text-[#501214] text-xl font-semibold no-underline">Texas State University</button>
                <div className="hidden md:flex gap-8">
                    <button onClick={() => handleClick('overview')} className="text-gray-800 font-medium hover:text-[#BF8C35]">Overview</button>
                    <button onClick={() => handleClick('process')} className="text-gray-800 font-medium hover:text-[#BF8C35]">Project</button>
                    <button onClick={() => handleClick('benefits')} className="text-gray-800 font-medium hover:text-[#BF8C35]">Benefits</button>
                    <button onClick={() => handleClick('faq')} className="text-gray-800 font-medium hover:text-[#BF8C35]">FAQ</button>
                    <button onClick={handleLoginClick} className="text-gray-800 font-medium hover:text-[#BF8C35]">Log In</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar