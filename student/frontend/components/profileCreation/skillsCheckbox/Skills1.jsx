import React from 'react'


/**
 * Skills1 component renders a list of skill checkboxes.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.skillsData - The array of skills data.
 * @param {Function} props.handleSkillsChange - The function to handle changes in the skills checkboxes.
 * @returns {JSX.Element} The rendered component.
 */
const Skills1 = ({ skillsData, handleSkillsChange }) => {

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