import React from 'react'

const Skills2 = () => {
    return (
        <div className='flex flex-col gap-4'>
            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p>AI - Neural Networks</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p>AI - LLMS</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p>Data Analysis</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p>MERN Stack</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p>Web Designer</p>
            </label>
        </div>
    )
}

export default Skills2