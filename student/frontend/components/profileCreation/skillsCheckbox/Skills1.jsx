import React from 'react'

const Skills1 = ({ skillsData }) => {

    console.log(skillsData.neural_networks)
    return (
        <div className='flex flex-col gap-4'>

            <label className='flex flex-row gap-4'>
                <input 
                    type='Checkbox'
                    checked={skillsData.neural_networks}
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>AI - Neural Networks</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>AI - LLMS</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>Data Analysis</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>MERN Stack</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input type='Checkbox' />
                <p className='sm:text-sm md:text-base xl:text-lg'>Web Designer</p>
            </label>
        </div>
    )
}

export default Skills1