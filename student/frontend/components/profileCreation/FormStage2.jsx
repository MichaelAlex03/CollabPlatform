import React from 'react'

const FormStage2 = () => {
  return (
    <div className='flex flex-col items-center w-full gap-4'>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='name' className='text-sm md:text-base '>Full Name</label>
        <input type='text' id='name' className='border-1 border-gray-400 p-2 rounded-lg w-full' />
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='Grad' className='text-sm md:text-base'>Semester and Year Graduating</label>
        <input type='date' id='Grad' className='border-1 border-gray-400 p-2 rounded-lg w-full' />
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='degree' className='text-sm md:text-base'>Degree Sought</label>
        <input type='text' id='degree' className='border-1 border-gray-400 p-2 rounded-lg w-full' />
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='department' className='text-sm md:text-base '>Department Name</label>
        <input type='text' id='department' className='border-1 border-gray-400 p-2 rounded-lg w-full' />
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='phoneNum' className='text-sm md:text-base '>Phone Number</label>
        <input type='text' id='phoneNum' className='border-1 border-gray-400 p-2 rounded-lg w-full' />
      </div>

    
     


    </div>
  )
}

export default FormStage2