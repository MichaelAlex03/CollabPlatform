import React, { useState } from 'react'
import ProgramLang from './skillsSubsections/ProgramLang';

const FormStage3 = ({ skillsData, handleSkillsChange }) => {

  //Lists of group of skills
  const categories = ["Programming Languages", "Tech Stacks", "AI & Data Science", "Project Management", "Databases"];

  const [activeCategory, setActiveCategory] = useState("Programming Languages")

  return (
    <div className='flex flex-col w-full items-center'>

      {/*Skill Categories*/}
      <div className='flex flex-row rounded-xl w-full gap-2'>
        {categories.map(category => {
          return (
            <button className={
              activeCategory === category
                ? `bg-[#501214] text-white rounded-xl w-full text-base transform transition duration-200 scale-125 p-1 lift-up` : `border-2 border-black text-black rounded-xl w-full text-base p-1 lift-up`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      {
        activeCategory === "Programming Languages" && (
          <ProgramLang />
        )
      }
    </div>
  )
}

export default FormStage3