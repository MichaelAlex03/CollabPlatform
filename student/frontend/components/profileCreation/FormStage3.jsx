import React, { useEffect, useState } from 'react'
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormStage3 = () => {

    const [numOfLinks, setNumOfLinks] = useState(1);

    const renderLinkFields = () => {
        const linkFields = [];
        for (let i = 0; i < numOfLinks; i++) {
            linkFields.push(
                <div key={i} className='w-full flex flex-col items-start mb-2'>
                    <label htmlFor={i} className='text-sm mt-2 font-semibold'>Link {i + 1}</label>
                    <div className='flex flex-row w-full items-center'>
                        <input type='text' id={i} className={`border-1 border-gray-400 p-2 rounded-lg w-full mt-1 ${i === 0 ? 'mr-0' : 'mr-5'}`}></input>
                        {i > 0 && (
                            <button
                                type='button'
                                onClick={() => setNumOfLinks(numOfLinks - 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    color='black'
                                   
                                    className='h-[10px]'
                                />
                            </button>
                        )}
                        {/* <button
                                type='button'
                                onClick={() => setNumOfLinks(numOfLinks - 1)}
                            >
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    color='black'
                                    size='lg'
                                />
                            </button> */}
                    </div>
                    {i < 2 && (
                        <p className='text-xs mt-2 hover:underline font-semibold' onClick={() => setNumOfLinks(numOfLinks + 1)}>+ Add Another Link</p>
                    )}
                </div>
            )
        }

        return linkFields
    }

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

            <div className='flex flex-col items-start w-full'>
                <label className='text-sm md:text-base '>Links? Github, LinkedIn, Personal Site, etc...</label>
                {renderLinkFields()}
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