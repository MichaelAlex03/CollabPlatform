import React, { useState } from 'react'
import Skills1 from './skillsCheckbox/Skills1'

const FormStage1 = () => {


  return (
    <div className='flex flex-col w-full h-full'>
      <div>
        <h2>Select the following skills that you have:</h2>
      </div>

      <div className='flex flex-col gap-4 mt-4'>
        <Skills1 />
      </div>
    </div>
  )
}

export default FormStage1