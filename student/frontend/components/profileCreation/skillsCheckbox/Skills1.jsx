import React from 'react'

const Skills1 = ({ skillsData, handleSkillsChange }) => {

    return (
        <div className='flex flex-col gap-4'>

            <label className='flex flex-row gap-4'>
                <input
                    type='Checkbox'
                    name='neural_networks'
                    checked={skillsData.neural_networks}
                    onChange={handleSkillsChange}
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>AI - Neural Networks</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input
                    type='Checkbox'
                    name='LLM'
                    checked={skillsData.LLM}
                    onChange={handleSkillsChange}
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>AI - LLMS</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input
                    type='Checkbox'
                    name='data_analysis'
                    checked={skillsData.data_analysis}
                    onChange={handleSkillsChange}
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>Data Analysis</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input
                    type='Checkbox'
                    name='MERN'
                    checked={skillsData.MERN}
                    onChange={handleSkillsChange}
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>MERN Stack</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input
                    type='Checkbox'
                    name='web_designer'
                    checked={skillsData.web_designer}
                    onChange={handleSkillsChange}
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>Web Designer</p>
            </label>
        </div>
    )
}

export default Skills1