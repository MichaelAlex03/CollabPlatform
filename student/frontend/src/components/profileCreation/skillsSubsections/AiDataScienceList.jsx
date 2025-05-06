import React from 'react'
import SkillCard from './SkillCard';

//Lists all AI and Data Science skills
const AiDataScienceList = ({ skillsData, handleSkillsChange }) => {

    const aiDataScienceSkills = [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Neural Networks",
        "Data Engineering",
    ];
    

    return (
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {aiDataScienceSkills.map((item, i) => {
                return (
                    <SkillCard key={i} name={item} skillsData={skillsData} handleSkillsChange={handleSkillsChange}/>
                )
            })}
        </div>
    )
}

export default AiDataScienceList