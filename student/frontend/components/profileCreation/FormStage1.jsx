import React, { useState, useEffect } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formRegex } from '../../hooks/useFormRegex';

const FormStage1 = ({ formData, handleFormChange }) => {

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

  const [phoneFocus, setPhoneFocus] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  const [nameFocus, setNameFocus] = useState(false);
  const [validName, setValidName] = useState(false);

  const [deptFocus, setDeptFocus] = useState(false);
  const [validDept, setValidDept] = useState(false);

  const [degreeFocus, setDegreeFocus] = useState(false);

  console.log(formData)

  //Validates phone number
  useEffect(() => {
    setValidPhone(formRegex.phoneNum.test(formData.phoneNum));
  }, [formData.phoneNum]);

  //Validates name
  useEffect(() => {
    setValidName(formRegex.studentName.test(formData.studentName));
  }, [formData.studentName]);

  //Validate department name
  useEffect(() => {
    setValidDept(formRegex.department.test(formData.department));
  });


  //Renders dropdown of degrees
  const renderDegrees = (inputName) => {
    return (
      <div className='max-h-40 overflow-y-auto w-full mt-1 border border-gray-300 rounded-lg'>
        {degrees.map((item, index) => (
          <div
            key={index}
            className='p-2 cursor-pointer '
            onMouseDown={() => { //Use onMouseDown instead of OnClick or not the div will be removed from DOM before selecting is processed
              const e = {
                target: {
                  name: inputName,
                  value: item
                }
              };

              handleFormChange(e);
              setDegreeFocus(false);
            }}>
            {item}
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className='flex flex-col items-center w-full gap-4'>


      {/*Resume*/}
      <div className="flex flex-col items-start w-full">
        <label htmlFor="fileUpload" className="text-md md:text-base">Upload Resume/CV</label>
        <div className="w-full mt-1">
            {!formData.resume ? (
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
                    onChange={handleFormChange}
                />
            ) : (
                <div className="flex items-center gap-2">
                    <p className="text-sm text-green-600">
                        Selected: {formData.resume.name}
                    </p>
                    <input
                        type="file"
                        id="fileUploadChange"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFormChange}
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
                            onClick={() => handleFormChange({ target: { name: 'resume', value: null } })}
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
      <div className="flex flex-col items-start w-full">
          <label htmlFor="fileUploadRec" className="text-md md:text-base">Letter Of Recommendation(Optional)</label>
          <div className="w-full mt-1">
            {!formData.letterOfRec ? (
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
                    onChange={handleFormChange}
                />
            ) : (
                <div className="flex items-center gap-2">
                    <p className="text-sm text-green-600">
                        Selected: {formData.letterOfRec.name}
                    </p>
                    <input
                        type="file"
                        id="fileUploadRecChange"
                        name="letterOfRec"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFormChange}
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
                            onClick={() => handleFormChange({ target: { name: 'letterOfRec', value: null } })}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            )}
            <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</p>
          </div>
        </div>


      <div className='flex flex-col items-start w-full '>
        <label htmlFor='name' className='text-md md:text-base '>Full Name</label>
        <input
          type='text'
          id='name'
          name='studentName'
          className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1'
          value={formData.studentName}
          onChange={handleFormChange}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='year' className='text-md md:text-base'>Year</label>
        <select
          className="border-1 border-gray-400 p-2 rounded-lg w-full mt-1"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleFormChange}
        >
          <option value="">Select Your Year</option>
          <option value="freshman">Freshman</option>
          <option value="sophmore">Sophmore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="graduate">Graduate</option>
        </select>
      </div>

      {/*Only render this div if gradfuate is not selected*/}
      {formData.year !== 'graduate' && formData.year !== '' && (
        <div className='flex flex-col items-start w-full '>
          <label htmlFor='Grad' className='text-md md:text-base'>Expected Graduation</label>
          <input
            type='date'
            name='expectedGrad'
            id='Grad'
            className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1'
            value={formData.expectedGrad}
            onChange={handleFormChange}
          />
        </div>
      )}

      {/*Only render this div if gradfuate is not selected*/}
      {formData.year !== 'graduate' && formData.year !== '' && (
        <div className='flex flex-col items-start w-full '>
          <label htmlFor='degree' className='text-md md:text-base'>Degree Sought</label>
          <input
            type='text'
            name='degree'
            value={formData.degree}
            id='degree'
            className='border-1 border-gray-400 p-2 rounded-lg w-full'
            onFocus={() => setDegreeFocus(true)}
            onBlur={() => setDegreeFocus(false)}
            readOnly
          />
          {degreeFocus && (
            renderDegrees("degree")
          )}
        </div>
      )}

      {formData.year === 'graduate' && (
        <div className='flex flex-col items-start w-full '>
          <label htmlFor='degree' className='text-md md:text-base'>Degree Completed</label>
          <input
            type='text'
            name='degree'
            value={formData.degreeCompleted}
            id='degree'
            className='border-1 border-gray-400 p-2 rounded-lg w-full'
            onFocus={() => setDegreeFocus(true)}
            onBlur={() => setDegreeFocus(false)}
            readOnly
          />
          {degreeFocus && (
            renderDegrees("degreeCompleted")
          )}
        </div>
      )}

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='department' className='text-md md:text-base '>Department Name</label>
        <input
          type='text'
          id='department'
          name='department'
          className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1'
          value={formData.department}
          onChange={handleFormChange}
          onFocus={() => setDeptFocus(true)}
          onBlur={() => setDeptFocus(false)}
        />
        {deptFocus && !validDept && (
          <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1'>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2"
              size="lg"
            />
            <p className='text-xs md:text-sm'> Ex. Computer Science</p>
          </div>
        )}
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='phoneNum' className='text-md md:text-base '>Phone Number</label>
        <input
          type='text'
          name='phoneNum'
          id='phoneNum'
          className='border-1 border-gray-400 p-2 rounded-lg w-full mt-1'
          value={formData.phoneNum}
          onChange={handleFormChange}
          onFocus={() => setPhoneFocus(true)}
          onBlur={() => setPhoneFocus(false)}
        />
        {phoneFocus && !validPhone && formData.phoneNum && (
          <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1'>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2"
              size="lg"
            />
            <p className='text-xs md:text-sm'>Invalid phone number format. Must be in format XXX-XXX-XXXX</p>
          </div>
        )}
      </div>


    </div>
  )
}

export default FormStage1