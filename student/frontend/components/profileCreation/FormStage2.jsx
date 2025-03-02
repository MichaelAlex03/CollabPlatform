import React, { useState, useEffect } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formRegex } from '../../hooks/useFormRegex';

const FormStage2 = ({ formData, handleFormChange }) => {

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

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='name' className='text-sm md:text-base '>Full Name</label>
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
        {nameFocus && !validName && (
          <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1 items-center'>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2"
              size="lg"
            />
            <p className='text-xs md:text-sm'> Letters, spaces, apostrophes, and hyphens allowed.</p>
          </div>
        )}
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='year' className='text-sm md:text-base'>Year</label>
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
          <label htmlFor='Grad' className='text-sm md:text-base'>Expected Graduation</label>
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
          <label htmlFor='degree' className='text-sm md:text-base'>Degree Sought</label>
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
          <label htmlFor='degree' className='text-sm md:text-base'>Degree Completed</label>
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
        <label htmlFor='department' className='text-sm md:text-base '>Department Name</label>
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
            <p className='text-xs md:text-sm'> Letters, spaces, commas, ampersands, apostrophes, and hyphens allowed. Ex. Computer Science</p>
          </div>
        )}
      </div>

      <div className='flex flex-col items-start w-full '>
        <label htmlFor='phoneNum' className='text-sm md:text-base '>Phone Number</label>
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
        {phoneFocus && !validPhone && (
          <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1'>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2"
              size="lg"
            />
            <p className='text-xs md:text-sm'>Invalid phone number format</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FormStage2