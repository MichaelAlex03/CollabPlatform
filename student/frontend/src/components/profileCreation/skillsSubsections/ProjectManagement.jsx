import React from 'react'
import SkillCard from './SkillCard';

//Lists all project management skills to select from
const ProjectManagement = ({ skillsData, handleSkillsChange }) => {

    const projectManagementSkills = [
        "Agile/Scrum methodology",
        "JIRA",
        "Trello"
    ];


    return (
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {projectManagementSkills.map((item, i) => {
                return (
                    <SkillCard key={i} name={item} skillsData={skillsData} handleSkillsChange={handleSkillsChange}/>
                )
            })}
        </div>
    )
}

export default ProjectManagement