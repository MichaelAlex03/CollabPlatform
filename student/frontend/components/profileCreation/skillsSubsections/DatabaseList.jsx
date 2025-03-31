import React from 'react'
import SkillCard from './SkillCard'

//Lists all databases to select from
const DatabaseList = ({ skillsData, handleSkillsChange }) => {

    const databaseTechnologies = [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Microsoft SQL Server",
        "Oracle Database",
        "Amazon DynamoDB",
    ];

    return (
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {databaseTechnologies.map((item, i) => {
                return (
                    <SkillCard key={i} name={item} skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
                )
            })}
        </div>
    )
}

export default DatabaseList