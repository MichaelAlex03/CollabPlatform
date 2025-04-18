import React from 'react'
import SkillCard from './SkillCard'

//Lists all programming languages to select from
const ProgramLang = ({ skillsData, handleSkillsChange }) => {

    const langugaes = ["Python", "Javascript", "Java", "CSS", "HTML", "C++", "C#", "C", "SQL"]

    return (
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {langugaes.map((item, i) => {
                return (
                    <SkillCard key={i} name={item} skillsData={skillsData} handleSkillsChange={handleSkillsChange}/>
                )
            })}
        </div>
    )
}

export default ProgramLang