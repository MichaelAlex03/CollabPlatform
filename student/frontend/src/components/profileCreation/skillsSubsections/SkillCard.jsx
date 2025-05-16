import React from 'react'

//Component for each skill with proficieny levels
const SkillCard = ({ name, skillsData, handleSkillsChange, description }) => {

    console.log("skills", skillsData)

    //Handles property names that dont match language names
    const nameMapping = {

        //Programming Languages
        "C#": "csharp",
        "C++": "cplus",
        "Python": "python",
        "Javascript": "javascript",
        "Java": "java",
        "CSS": "css",
        "HTML": "html",
        "C": "c",
        "SQL": "sql",

        //Tech Stacks
        "MERN Stack": "MERN",
        "MEAN Stack": "MEAN",
        "PERN Stack": "PERN",
        "MEVN Stack": "MEVN",
        "LAMP Stack": "LAMP",
        "JAMstack": "JAM",
        ".NET": "NET",

        //AI and Data Science
        "Machine Learning": "machineLearning",
        "Deep Learning": "deepLearning",
        "Natural Language Processing": "naturalLanguageProccessing",
        "Computer Vision": "computerVision",
        "Reinforcement Learning": "reinforcementLearning",
        "Neural Networks": "neuralNetworks",
        "Data Engineering": "dataEngineering",

        //Project Management
        "Agile/Scrum methodology": "agile",
        "JIRA": "jira",
        "Trello": "trello",

        //Databases
        "MySQL": "mySQL",
        "PostgreSQL": "postgreSQL",
        "MongoDB": "mongoDB",
        "Oracle Database": "oracleDB",
        "Amazon DynamoDB": "dynamoDB",

        //Frameworks
        "React": "react",
        "Angular": "angular",
        "Vue.js": "vue",
        "Node.js": "node",
        "Express.js": "express",
        "Django": "django",
        "Spring Boot": "springBoot",
        "Flask" : "flask",
        "ASP.NET Core" : "aspNet",
        "TensorFlow" : "tensorFlow",
        "PyTorch" : "pyTorch",
        "Next.js" : "nextJs"

    }

    //gets corresponding property name in the skillsData object given the name prop
    const getSkillKey = (name) => {
        return nameMapping[name];
    }

    const skillKey = getSkillKey(name)

    return (
        <div className='flex flex-row border-1 border-gray-400 items-center justify-between w-full p-6 rounded-xl enlarge'>

            {/*Skill name and description if provided*/}
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-xl text-[#501214]'>{name}</h1>
                {description && <p className='text-xs'>({description})</p>}
            </div>

            {/*Proficiency*/}
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <label className='text-base font-semibold' htmlFor={`none-${name}`}>None</label>
                    <input
                        type='radio'
                        id='none'
                        name={skillKey}
                        value='none'
                        checked={skillsData[skillKey] === "none"}
                        onChange={handleSkillsChange}
                        className='cursor-pointer'
                    />
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <label className='text-base font-semibold' htmlFor={`basic-${name}`}>Basic</label>
                    <input
                        type='radio'
                        id='basic'
                        name={skillKey}
                        value='basic'
                        checked={skillsData[skillKey] === "basic"}
                        onChange={handleSkillsChange}
                        className='cursor-pointer'
                    />
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <label className='text-base font-semibold' htmlFor={`intermediate-${name}`}>Intermediate</label>
                    <input
                        type='radio'
                        id='intermediate'
                        name={skillKey}
                        value='intermediate'
                        checked={skillsData[skillKey] === "intermediate"}
                        onChange={handleSkillsChange}
                        className='cursor-pointer'
                    />
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <label className='text-base font-semibold' htmlFor={`advanced-${name}`}>Advanced</label>
                    <input
                        type='radio'
                        id='advanced'
                        name={skillKey}
                        value='advanced'
                        checked={skillsData[skillKey] === "advanced"}
                        onChange={handleSkillsChange}
                        className='cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default SkillCard