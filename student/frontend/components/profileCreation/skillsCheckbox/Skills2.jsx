import React from 'react'

const Skills2 = ({ skillsData }) => {
    return (
        <div className='flex flex-col gap-4'>
            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>Jira</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>C++</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>Java</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>Python</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>SQL</p>
            </label>
        </div>
    )
}

export default Skills2