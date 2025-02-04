import React from 'react'

const Navbar = () => {

    const handleClick = (div) => {
        if (!div){
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else{
            document.getElementById(div)?.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <header class="bg-white border-b-4 border-[#501214] sticky top-0 z-50 shadow-md">
            <nav class="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <button onClick={() => handleClick('')}  class="text-[#501214] text-xl font-semibold no-underline">Texas State University</button>
                <div class="hidden md:flex gap-8">
                    <button onClick={() => handleClick('overview')} class="text-gray-800 font-medium hover:text-[#501214]">Overview</button>
                    <button onClick={() => handleClick('process')} class="text-gray-800 font-medium hover:text-[#501214]">Project</button>
                    <button onClick={() => handleClick('benefits')} class="text-gray-800 font-medium hover:text-[#501214]">Benefits</button>
                    <button onClick={() => handleClick('faq')} class="text-gray-800 font-medium hover:text-[#501214]">FAQ</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar