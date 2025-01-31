import React from 'react'

const Navbar = () => {
    return (
        <header class="bg-white border-b-4 border-[#501214] sticky top-0 z-50 shadow-md">
            <nav class="max-w-6xl mx-auto p-4 flex justify-between items-center">
                <a href="#" class="text-[#501214] text-xl font-semibold no-underline">Texas State University</a>
                <ul class="hidden md:flex gap-8 list-none">
                    <li><a href="#overview" class="text-gray-800 font-medium hover:text-[#501214] transition">Overview</a>
                    </li>
                    <li><a href="#process" class="text-gray-800 font-medium hover:text-[#501214] transition">Project
                        Submission</a></li>
                    <li><a href="#benefits" class="text-gray-800 font-medium hover:text-[#501214] transition">Benefits</a>
                    </li>
                    <li><a href="#faq" class="text-gray-800 font-medium hover:text-[#501214] transition">FAQ</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar