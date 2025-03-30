import React, { useState } from 'react'
import Skills1 from './skillsCheckbox/Skills1'
import Skills2 from './skillsCheckbox/Skills2'

const FormStage1 = ({ skillsData, handleSkillsChange }) => {


  return (
    <div className='flex flex-col w-full items-center'>
      <div className='grid grid-cols-2 gap-x-20 gap-y-6 mt-4'>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4 text-center text-[#501214]">Technical Skills</h3>
          <Skills1 skillsData={skillsData} handleSkillsChange={handleSkillsChange}/>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4 text-center text-[#501214]">Development Tools</h3>
          <Skills2 skillsData={skillsData} handleSkillsChange={handleSkillsChange}/>
        </div>
      </div>
    </div>
  )
}

export default FormStage1