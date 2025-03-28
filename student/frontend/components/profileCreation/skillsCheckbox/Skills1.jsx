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

            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input
                        type='Checkbox'
                        name='MERN'
                        checked={skillsData.MERN}
                        onChange={handleSkillsChange}
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>Fullstack Stack</p>
                </label>
                {
                    skillsData.MERN && (
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full mt-1"
                            id="techStack"
                            name="techStack"
                        // onChange={handleFormChange}
                        >
                            <option value="">Select Your Year</option>
                            <option value="freshman">Freshman</option>
                            <option value="sophmore">Sophmore</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                            <option value="graduate">Graduate</option>
                        </select>
                    )
                }
            </div>


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