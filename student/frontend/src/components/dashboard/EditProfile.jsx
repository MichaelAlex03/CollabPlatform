import React, { useEffect, useState } from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const EditProfile = ({ localProfile, serverProfile, handleChange }) => {

    return (
        <div className='flex flex-row w-full gap-8'>


            {/* Profile Picture Selector*/}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl p-6 flex flex-col items-center flex-1/3 h-1/3">
                <div className="bg-gray-500 rounded-full p-6 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition relative h-1/3">
                    <FontAwesomeIcon icon={faCamera} className="text-white text-2xl" />
                </div>
                <div className='flex flex-col items-center absolute'>
                    <input type='file' className='opacity-0 h-0' id='fileUpload' />
                    <label htmlFor='fileUpload'>Upload Photo</label>
                </div>
            </div>

            <div className='bg-white/80 backdrop-blur-md shadow-2xl border border-gray-400 rounded-xl p-6 grid grid-cols-2 w-2/3 gap-2'>

                <div className='relative p-4'>
                    <input
                        type='text'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.studentName}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Full Name</label>
                </div>

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='aNum'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.aNum}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>A#</label>
                </div>

                {serverProfile.year !== 'graduate'
                    ? (
                        <div className='relative p-4'>
                            <input
                            name='expectedGrad'
                                type='text'
                                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                                value={localProfile.expectedGrad}
                                onChange={handleChange}
                            />
                            <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Expected Graduation</label>
                        </div>
                    ) : (
                        <div className='relative p-4'>
                            <input
                                type='text'
                                name='degreeCompleted'
                                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                                value={localProfile.degreeCompleted}
                                onChange={handleChange}
                            />
                            <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Degree Completed</label>
                        </div>
                    )

                }

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='year'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.year}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Year</label>
                </div>

                {serverProfile.year !== "graduate" && (
                    <div className='relative p-4'>
                        <input
                            type='text'
                            name='degree'
                            className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                            value={localProfile.degree}
                        />
                        <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Degree Sought</label>
                    </div>
                )}

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='department'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.department}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Department</label>
                </div>

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='phoneNum'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.phoneNum}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Phone Number</label>
                </div>

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='workedHrs'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.workedHrs}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Worked Hours</label>
                </div>

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='projects'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.projects}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Projects</label>
                </div>

            </div>


        </div >
    )
}

export default EditProfile