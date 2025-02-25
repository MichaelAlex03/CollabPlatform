import React, { useState } from 'react'
import Skills1 from './skillsCheckbox/Skills1'
import Skills2 from './skillsCheckbox/Skills2'

const FormStage1 = () => {


  return (
    <div className='flex flex-col w-full items-center'>

      <div className='flex flex-row gap-8 mt-4'>
        <Skills1 />
        <Skills2 />
      </div>
    </div>
  )
}

export default FormStage1