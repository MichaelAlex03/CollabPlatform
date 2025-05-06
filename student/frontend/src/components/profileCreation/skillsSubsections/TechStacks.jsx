import React from 'react'
import SkillCard from './SkillCard';

//Lists all tech stacks to select from
const TechStacks = ({ skillsData, handleSkillsChange }) => {

    const techStacks = [
        { name: "MERN Stack", description: "MongoDB, Express, React, Node.js" }, 
        { name: "MEAN Stack", description: "MongoDB, Express, Angular, Node.js"},
        { name: "PERN Stack", description: "PostgreSQL, Express, React, Node.js"},
        { name: "MEVN Stack", description: "MongoDB, Express, Vue, Node.js"},
        { name: "LAMP Stack", description: "Linux, Apache, MySQL, PHP"},
        { name: "JAMstack", description: "Javascript, APIs, Markup"},
        { name: ".NET", description: "C#, ASP.NET, SQL Server"},
    ];

    return (
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {techStacks.map((item, i) => {
                return (
                    <SkillCard
                        key={i}
                        name={item.name}
                        description={item.description}
                        skillsData={skillsData}
                        handleSkillsChange={handleSkillsChange}
                    />
                )
            })}
        </div>
    )
}

export default TechStacks