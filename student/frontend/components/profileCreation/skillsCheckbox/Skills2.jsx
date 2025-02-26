import React from 'react'

/**
 * Skills2 component renders a list of skill checkboxes.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.skillsData - The array of skills data.
 * @param {Function} props.handleSkillsChange - The function to handle changes in the skills checkboxes.
 * @returns {JSX.Element} The rendered component.
 */
const Skills2 = ({ skillsData, handleSkillsChange}) => {
    return (
        <div className='flex flex-col gap-4'>
            <label className='flex flex-row gap-4'>
                <input 
                    type='Checkbox'
                    name='jira'
                    checked={skillsData.jira}
                    onChange={handleSkillsChange} 
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>Jira</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input 
                    type='Checkbox'
                    name='cplus'
                    checked={skillsData.cplus}
                    onChange={handleSkillsChange} 
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>C++</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input 
                    type='Checkbox'
                    name='java'
                    checked={skillsData.java}
                    onChange={handleSkillsChange} 
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>Java</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input 
                    type='Checkbox'
                    name='python'
                    checked={skillsData.python}
                    onChange={handleSkillsChange} 
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>Python</p>
            </label>

            <label className='flex flex-row gap-4'>
                <input 
                    type='Checkbox'
                    name='sql'
                    checked={skillsData.sql}
                    onChange={handleSkillsChange} 
                />
                <p className='sm:text-sm md:text-base xl:text-lg'>SQL</p>
            </label>
        </div>
    )
}

export default Skills2