import React, { useEffect, useState } from 'react'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const EditProfile = ({ localProfile, handleChange }) => {

    console.log("Test", localProfile)


    const degrees = [
        "Computer Science",
        "Business",
        "Computer Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Industrial Engineering",
        "Information Technology",
        "Information Systems",
        "Software Engineering",
        "Data Science",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Psychology",
        "Economics",
        "Finance",
        "Marketing",
        "Management",
        "Accounting",
        "Communication",
        "English",
        "History"
    ]

    return (
        <div className='flex flex-row w-full gap-8'>


            {/* Profile Picture Selector*/}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl p-6 flex flex-col items-center flex-1/3 h-2/5">
                <div className="bg-gray-500 rounded-full p-24 flex items-center justify-center relative h-1/3">
                    <FontAwesomeIcon icon={faCamera} size="2xl" className="text-white text-2xl" />
                    <div className='flex flex-col items-center absolute bottom-10'>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-2'>
                    <input type='file' className='opacity-0 h-0' id='fileUpload' />
                    <button
                        className='cursor-pointer bg-gray-700 border-2 border-gray-400 px-6 py-1 rounded-xl text-white'
                        onClick={() => {
                            document.getElementById("fileUpload").click()
                        }}
                    >
                        Upload Photo
                    </button>
                    <p className="text-sm text-gray-500 mt-1">Allowed *.jpeg, *.jpg, *.png, *.gif</p>
                    <p className="text-sm text-gray-500">Max Size of 5.00 MB</p>
                </div>
            </div>

            <div className='bg-white/80 backdrop-blur-md shadow-2xl border border-gray-400 rounded-xl p-6 grid grid-cols-2 w-2/3 gap-2'>

                {/*Resume*/}
                <div className="flex flex-col items-start w-full px-4 py-2">
                    <label htmlFor="fileUpload" className="text-md md:text-base">Upload Resume/CV</label>
                    <div className="w-full mt-1">
                        {!localProfile.resume ? (
                            <input
                                type="file"
                                id="fileUpload"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                className="w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-[#501214] file:text-white
                            hover:file:bg-[#3d0e0f]
                            cursor-pointer"
                                onChange={handleChange}
                            />
                        ) : (
                            <div className="flex items-center gap-2">
                                <p className="text-sm text-green-600">
                                    Selected: {localProfile.resume.filename}
                                </p>
                                <input
                                    type="file"
                                    id="fileUploadChange"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={handleChange}
                                />
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="bg-[#501214] p-2 w-1/2 text-sm text-white flex flex-row justify-center items-center rounded-lg"
                                        onClick={() => document.getElementById('fileUploadChange').click()}
                                    >
                                        Change
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-[#501214] p-2 w-1/2 text-sm text-white flex flex-row justify-center items-center rounded-lg"
                                        onClick={() => handleChange({ target: { name: 'resume', value: null } })}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )}
                        <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</p>
                    </div>
                </div>

                {/*Letter of Recommendation*/}
                <div className="flex flex-col items-start w-full px-4 py-2">
                    <label htmlFor="fileUploadRec" className="text-md md:text-base">Letter Of Recommendation(Optional)</label>
                    <div className="w-full mt-1">
                        {!localProfile.letterOfRec ? (
                            <input
                                type="file"
                                id="fileUploadRec"
                                name="letterOfRec"
                                accept=".pdf,.doc,.docx"
                                className="w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-[#501214] file:text-white
                            hover:file:bg-[#3d0e0f]
                            cursor-pointer"
                                onChange={handleChange}
                            />
                        ) : (
                            <div className="flex items-center gap-2">
                                <p className="text-sm text-green-600">
                                    Selected: {localProfile.letterOfRec.filename}
                                </p>
                                <input
                                    type="file"
                                    id="fileUploadRecChange"
                                    name="letterOfRec"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={handleChange}
                                />
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="bg-[#501214] p-2 w-1/2 text-sm text-white flex flex-row justify-center items-center rounded-lg"
                                        onClick={() => document.getElementById('fileUploadRecChange').click()}
                                    >
                                        Change
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-[#501214] p-2 w-1/2 text-sm text-white flex flex-row justify-center items-center rounded-lg"
                                        onClick={() => handleChange({ target: { name: 'letterOfRec', value: null } })}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )}
                        <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</p>
                    </div>
                </div>

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

                {localProfile.year !== 'graduate'
                    ? (
                        <div className='relative p-4'>
                            <select
                                type='text'
                                name='degree'
                                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                                value={localProfile.degree}
                                onChange={handleChange}
                            >
                                {degrees.map((degree, i) => (
                                    <option key={i} value={degree}>{degree}</option>
                                ))}
                            </select>
                            <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Degree Sought</label>
                        </div>
                    ) : (
                        <div className='relative p-4'>
                            <select
                                type='text'
                                name='degree'
                                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                                value={localProfile.degreeCompleted}
                                onChange={handleChange}
                            >
                                {degrees.map((degree, i) => (
                                    <option key={i} value={degree}>{degree}</option>
                                ))}
                            </select>
                            <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Degree Completed</label>
                        </div>
                    )

                }

                <div className='relative p-4'>
                    <select
                        type='text'
                        name='year'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.year}
                        onChange={handleChange}
                    >
                        <option value="freshman">Freshman</option>
                        <option value="sophmore">Sophmore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="graduate">Graduate</option>
                    </select>
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Year</label>
                </div>

                {localProfile.year !== "graduate" && (

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

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='jobs'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.jobs}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Jobs</label>
                </div>

                <div className='relative p-4'>
                    <input
                        type='text'
                        name='links'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.links}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Links</label>
                </div>
                <div className='relative p-4'>
                    <input
                        type='text'
                        name='referenceName'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.referenceName}
                        onChange={handleChange}
                    />
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Reference Name</label>
                </div>
                <div className='relative p-4'>
                    <select
                        type='text'
                        name='referenceContactType'
                        className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                        value={localProfile.referenceContactType}
                        onChange={handleChange}
                    >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                    <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Reference Type</label>
                </div>

                {localProfile.referenceContactType === 'phone'
                    ? (
                        <div className='relative p-4'>
                            <input
                                type='text'
                                name='referencePhone'
                                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                                value={localProfile.referencePhone}
                                onChange={handleChange}
                            />
                            <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Reference Phone Number</label>
                        </div>
                    ) :
                    (
                        <div className='relative p-4'>
                            <input
                                type='text'
                                name='referenceEmail'
                                className='border-[#501214] border-2 w-full rounded-lg p-4 outline-0'
                                value={localProfile.referenceEmail}
                                onChange={handleChange}
                            />
                            <label className='absolute left-8 p-1 top-0 bg-white  focus:text-[#501214] z-50'>Reference Email</label>
                        </div>
                    )
                }

            </div>


        </div >
    )
}

export default EditProfile