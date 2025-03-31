import React from 'react'
import SkillCard from './SkillCard';

//Lists all frameworks and libraries to select from
const FrameworkLibraryList = ({ skillsData, handleSkillsChange }) => {
    const frameworksAndLibraries = [
        "React",
        "Angular",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Django",
        "Spring Boot",
        "Flask",
        "ASP.NET Core",
        "TensorFlow",
        "PyTorch",
        "Next.js"
    ];

    return (
        <div className='flex flex-col gap-4 mt-8 w-3/4'>
            {frameworksAndLibraries.map((item, i) => {
                return (
                    <SkillCard key={i} name={item} skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
                )
            })}
        </div>
    )
}

export default FrameworkLibraryList