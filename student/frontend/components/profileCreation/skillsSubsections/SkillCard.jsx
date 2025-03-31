import React from 'react'

const SkillCard = ({ name, skillsData, handleSkillsChange }) => {


    return (
        <div className='flex flex-row border-2 border-black items-center justify-between w-full p-6 rounded-xl enlarge'>
            <h1 className='font-bold text-xl'>{name}</h1>

            {/*Proficiency*/}
            <div className='flex flex-row gap-4'>
                <button>None</button>
                <button>Basic</button>
                <button>Intermediate</button>
                <button>Advanced</button>
            </div>
        </div>
    )
}

export default SkillCard