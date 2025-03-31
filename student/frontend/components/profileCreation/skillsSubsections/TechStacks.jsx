import React from 'react'
import SkillCard from './SkillCard';

const TechStacks = ({ skillsData, handleSkillsChange}) => {

    const techStacks = [
        "MERN Stack",    // MongoDB, Express, React, Node.js
        "MEAN Stack",    // MongoDB, Express, Angular, Node.js
        "LAMP Stack",    // Linux, Apache, MySQL, PHP
        "PERN Stack",    // PostgreSQL, Express, React, Node.js
        ".NET Stack"     // C#, ASP.NET, SQL Server
    ];

    return (
       <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {techStacks.map((item, i) => {
                return (
                    <SkillCard key={i} name={item} skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
                )
            })}
       </div>
    )
}

export default TechStacks