import React from 'react'

const Skills2 = () => {
    return (
        <div className='flex flex-col gap-4'>
            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='text-lg'>Java</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='text-lg'>C++</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='text-lg'>C</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='text-lg'>Python</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='text-lg'>SQL</p>
            </label>
        </div>
    )
}

export default Skills2