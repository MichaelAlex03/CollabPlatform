import React, { useState } from 'react'
import ProgramLang from './skillsSubsections/ProgramLang';
import TechStacks from './skillsSubsections/TechStacks';
import AiDataScienceList from './skillsSubsections/AiDataScienceList';
import ProjectManagement from './skillsSubsections/ProjectManagement';
import DatabaseList from './skillsSubsections/DatabaseList';
import FrameworkLibraryList from './skillsSubsections/FrameworkLibraryList';


//Skills selection screen
const FormStage3 = ({ skillsData, handleSkillsChange }) => {

  //Lists of group of skills
  const categories = ["Programming Languages", "Tech Stacks", "AI & Data Science", "Project Management", "Databases", "Frameworks/Libraries"];

  const [activeCategory, setActiveCategory] = useState("Programming Languages")

  return (
    <div className='flex flex-col w-full items-center'>

      {/*Skill Categories*/}
      <div className='flex flex-row rounded-xl w-full gap-2 justify-center'>
        {categories.map(category => {
          return (
            <button
            type='button'
              key={category}
              className={
                activeCategory === category
                  ? `bg-[#501214] text-white rounded-xl w-full text-base transform transition duration-200 p-1 lift-up` 
                  : `border-1 border-black text-black rounded-xl w-full text-base p-1 lift-up`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      {/*Content for each corresponding category*/}
      {
        activeCategory === "Programming Languages" && (
          <ProgramLang skillsData={skillsData} handleSkillsChange={handleSkillsChange}/>
        )
      }
      {
        activeCategory === "Tech Stacks" && (
          <TechStacks skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
        )
      }
      {
        activeCategory === "AI & Data Science" && (
          <AiDataScienceList skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
        )
      }
      {
        activeCategory === "Project Management" && (
          <ProjectManagement skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
        )
      }
      {
        activeCategory === "Databases" && (
          <DatabaseList skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
        )
      }
      {
        activeCategory === "Frameworks/Libraries" && (
          <FrameworkLibraryList skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
        )
      }
    </div>
  )
}

export default FormStage3