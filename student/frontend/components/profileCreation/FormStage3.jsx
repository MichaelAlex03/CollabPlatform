import React from 'react'

const FormStage3 = () => {
    return (
        <div className='flex flex-col items-center w-full gap-4'>

            <div className='flex flex-col items-start w-full '>
                <label htmlFor='hours' className='text-sm md:text-base '>Number of hours currently worked per week</label>
                <input type='text' id='hours' className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1' />
            </div>

            <div className='flex flex-col items-start w-full '>
                <label htmlFor='projects' className='text-sm md:text-base'>Projects Done? Please explain them</label>
                <textarea id='projects' className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1' />
            </div>

            <div className='flex flex-col items-start w-full '>
                <label htmlFor='jobs' className='text-sm md:text-base'>Jobs that you have done that will help be a team player</label>
                <textarea id='jobs' className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1' />
            </div>

            <div className='flex flex-col items-start w-full '>
                <label htmlFor='Grad' className='text-sm md:text-base '>Links? Github, LinkedIn, Personal Site, etc...</label>
                <input type='text' id='Grad' className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1' />
            </div>

            <div className='flex flex-col items-start w-full '>
                <label htmlFor='Grad' className='text-sm md:text-base '>
                    Any faculty that can speak highly of your work ethic? <br />
                    If so please provide their name and contact
                </label>
                <input type='text' id='Grad' className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1' />
            </div>





        </div>
    )
}

export default FormStage3