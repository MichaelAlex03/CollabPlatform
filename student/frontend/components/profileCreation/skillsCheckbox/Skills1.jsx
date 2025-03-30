import React from 'react'

const Skills1 = ({ skillsData, handleSkillsChange }) => {
    return (
        <div className='flex flex-col gap-4'>
            {/* AI Skills Group */}
            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input
                        type='Checkbox'
                        name='ai_skills'
                        checked={skillsData.ai_skills}
                        onChange={handleSkillsChange}
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>AI/ML</p>
                </label>
                {skillsData.ai_skills && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="ai_type"
                            onChange={handleSkillsChange}
                        >
                            <option value="">Select AI Specialty</option>
                            <option value="neural_networks">Neural Networks</option>
                            <option value="LLM">Large Language Models</option>
                            <option value="computer_vision">Computer Vision</option>
                            <option value="nlp">Natural Language Processing</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Data Analysis Group */}
            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input
                        type='Checkbox'
                        name='data_analysis'
                        checked={skillsData.data_analysis}
                        onChange={handleSkillsChange}
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>Data Analysis</p>
                </label>
                {skillsData.data_analysis && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="data_tools"
                            onChange={handleSkillsChange}
                        >
                            <option value="">Select Data Tools</option>
                            <option value="python_data">Python (Pandas/NumPy)</option>
                            <option value="r_stats">R Statistics</option>
                            <option value="tableau">Tableau</option>
                            <option value="power_bi">Power BI</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Fullstack Group */}
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
                {skillsData.MERN && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="stack_type"
                            onChange={handleSkillsChange}
                        >
                            <option value="">Select Stack</option>
                            <option value="mern">MERN (MongoDB, Express, React, Node)</option>
                            <option value="mean">MEAN (MongoDB, Express, Angular, Node)</option>
                            <option value="pern">PERN (PostgreSQL, Express, React, Node)</option>
                            <option value="lamp">LAMP (Linux, Apache, MySQL, PHP)</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Web Design Group */}
            <div className='flex-col'>
                <label className='flex flex-row gap-4'>
                    <input
                        type='Checkbox'
                        name='web_designer'
                        checked={skillsData.web_designer}
                        onChange={handleSkillsChange}
                    />
                    <p className='sm:text-sm md:text-base xl:text-lg'>Web Designer</p>
                </label>
                {skillsData.web_designer && (
                    <div className="ml-8 mt-1">
                        <select
                            className="border-1 border-gray-400 p-1 rounded-lg w-full"
                            name="design_tools"
                            onChange={handleSkillsChange}
                        >
                            <option value="">Select Design Tools</option>
                            <option value="figma">Figma</option>
                            <option value="adobe_xd">Adobe XD</option>
                            <option value="sketch">Sketch</option>
                            <option value="photoshop">Photoshop</option>
                        </select>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills1