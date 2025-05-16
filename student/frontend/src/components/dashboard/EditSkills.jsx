import React, { useState } from 'react'
import ProgramLang from '../profileCreation/skillsSubsections/ProgramLang';
import TechStacks from '../profileCreation/skillsSubsections/TechStacks';
import AiDataScienceList from '../profileCreation/skillsSubsections/AiDataScienceList';
import ProjectManagement from '../profileCreation/skillsSubsections/ProjectManagement';
import DatabaseList from '../profileCreation/skillsSubsections/DatabaseList';
import FrameworkLibraryList from '../profileCreation/skillsSubsections/FrameworkLibraryList';

const EditSkills = ({ skillsData, handleSkillsChange }) => {

  const categories = ["Programming Languages", "Tech Stacks", "AI & Data Science", "Project Management", "Databases", "Frameworks/Libraries"];

  const [activeCategory, setActiveCategory] = useState("Programming Languages");

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
                  ? `bg-[#501214] text-white rounded-xl w-full text-base transform transition duration-200 p-3 lift-up cursor-pointer`
                  : `border-1 border-black text-black rounded-xl w-full text-base p-3 lift-up cursor-pointer`}
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
          <ProgramLang skillsData={skillsData} handleSkillsChange={handleSkillsChange} />
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

export default EditSkills