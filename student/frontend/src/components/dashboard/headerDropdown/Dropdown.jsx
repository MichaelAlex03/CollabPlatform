import React from 'react'

const Dropdown = () => {
    return (
        <div
            className='border border-[#501214] p-4 rounded-xl flex flex-col 
            items-center justify-center z-10 bg-white before:content-[""] before:bg-white before:border before:border-t-2'>
            <ul className='flex flex-col gap-4'>
                <li>Logout</li>
                <li>Profile</li>
                <li>Skills</li>
            </ul>
        </div>
    )
}

export default Dropdown