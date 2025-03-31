import React from 'react'

//Component for each skill with proficieny levels
const SkillCard = ({ name, skillsData, handleSkillsChange, description }) => {

    console.log("skills", skillsData)

    //Handles property names that dont match language names
    const nameMapping = {
        "C#": "csharp",
        "C++": "cplus"
    }

    const getSkillKey = (name) => {
        return nameMapping[name] || name.toLowerCase();
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
                    />
                </div>
            </div>
        </div>
    )
}

export default SkillCard