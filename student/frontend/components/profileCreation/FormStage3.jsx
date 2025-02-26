import React, { useEffect, useState } from 'react'
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormStage3 = () => {

    const [numOfLinks, setNumOfLinks] = useState(1);

    const renderLinkFields = () => {
        for (let i = 1; i < numOfLinks; i++) {
            return (
                <div className='w-full flex flex-col items-start'>
                    <label htmlFor={i} className='text-sm mt-2'>Link {numOfLinks}</label>
                    <div className='flex flex-row w-full items-center'>
                        <input type='text' id={i} className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1 mr-5'></input>
                        <button onClick={() => setNumOfLinks(numOfLinks - 1)}>
                            <FontAwesomeIcon
                                icon={faTrash}
                                color='black'
                                size='lg'

                            />
                        </button>
                    </div>
                    {i < 3 && (
                        <p className='text-xs mt-2 hover:underline' onClick={() => setNumOfLinks(numOfLinks + 1)}>+ Add Another Link</p>
                    )}
                </div>
            )
        }
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

            <div className='flex flex-col items-start w-full '>
                <label htmlFor='links' className='text-sm md:text-base '>Links? Github, LinkedIn, Personal Site, etc...</label>
                <label htmlFor='links' className='text-sm mt-2'>Link 1</label>
                <input type='text' id='links' className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1'></input>
                {numOfLinks === 1 &&
                    (
                        <p className='text-xs mt-2 hover:underline' onClick={() => setNumOfLinks(numOfLinks + 1)}>+ Add Another Link</p>
                    )
                }
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