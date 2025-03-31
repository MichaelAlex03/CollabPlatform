import React from 'react'

const Skills2 = ({ skillsData, handleSkillsChange}) => {
    return (
        <div className='flex flex-col gap-4'>
            {/* Project Management Tools */}
            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input 
                        type='Checkbox'
                        name='project_tools'
                        checked={skillsData.project_tools}
                        onChange={handleSkillsChange} 
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>Project Management</p>
                </label>
                {skillsData.project_tools && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="management_tools"
                            onChange={handleSkillsChange}
                        >
                            <option value="">Select Tool</option>
                            <option value="jira">Jira</option>
                            <option value="trello">Trello</option>
                            <option value="asana">Asana</option>
                            <option value="clickup">ClickUp</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Programming Languages */}
            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input 
                        type='Checkbox'
                        name='programming'
                        checked={skillsData.programming}
                        onChange={handleSkillsChange} 
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>Programming Languages</p>
                </label>
                {skillsData.programming && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="languages"
                            onChange={handleSkillsChange}
                            multiple
                        >
                            <option value="cplus">C++</option>
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">TypeScript</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
                    </div>
                )}
            </div>

            {/* Database Skills */}
            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input 
                        type='Checkbox'
                        name='database'
                        checked={skillsData.database}
                        onChange={handleSkillsChange} 
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>Database</p>
                </label>
                {skillsData.database && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="db_type"
                            onChange={handleSkillsChange}
                        >
                            <option value="">Select Database</option>
                            <option value="sql">SQL</option>
                            <option value="mongodb">MongoDB</option>
                            <option value="postgresql">PostgreSQL</option>
                            <option value="mysql">MySQL</option>
                            <option value="oracle">Oracle</option>
                        </select>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills2