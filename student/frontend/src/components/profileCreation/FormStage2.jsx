import React, { useEffect, useState } from "react"
import { faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formRegex } from "../../hooks/useFormRegex";

const FormStage2 = ({ formData, handleFormChange, deleteLink }) => {
    const [hoursFocus, setHoursFocus] = useState(false);
    const [validHours, setValidHours] = useState(false);

    const [linkFocus, setLinkFocus] = useState(false);
    const [validLink, setValidLink] = useState(true);

    const [selectEmail, setSelectEmail] = useState(false);
    const [selectPhone, setSelectPhone] = useState(false);

    const [phoneFocus, setPhoneFocus] = useState(false);
    const [validPhone, setValidPhone] = useState(false);

    const [emailFocus, setEmailFocus] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [numOfLinks, setNumOfLinks] = useState(1);

    console.log(linkFocus);
    console.log(validLink)

    //Validates that hours is a number
    useEffect(() => {
        setValidHours(formRegex.workedHrs.test(formData.workedHrs));
    }, [formData.workedHrs]);

    //Validates email
    useEffect(() => {
        setValidEmail(formRegex.referenceEmail.test(formData.referenceEmail));
    }, [formData.referenceEmail]);

    //Validates phone number
    useEffect(() => {
        setValidPhone(formRegex.phoneNum.test(formData.referencePhone));
    }, [formData.referencePhone]);

    //Validate links
    useEffect(() => {
        for (let i = 0; i < formData.links.length; i++) {
            if (!formRegex.links.test(formData.links[i]) && formData.links[i] !== "") {
                setValidLink(false);
                return;
            } else if (i === formData.links.length - 1) {
                setValidLink(true);
            }
        }
    }, [formData.links[0], formData.links[1], formData.links[2]]);

    console.log("Email:", selectEmail)
    console.log("Phone: ", selectPhone)

    const renderLinkFields = () => {
        const linkFields = [];
        for (let i = 0; i < numOfLinks; i++) {
            linkFields.push(
                <>
                    <div key={i} className="w-full flex flex-col items-start mb-2">
                        <label htmlFor={i} className="text-sm mt-2 font-semibold">Link {i + 1}</label>
                        <div className="flex flex-row w-full items-center">
                            <input
                                type="text"
                                name="links"
                                id={i}
                                className={`border-1 border-gray-400 p-2 rounded-lg w-full mt-1 ${i === 0 ? "mr-0" : "mr-5"}`}
                                value={formData.links[i] || ""}
                                onChange={handleFormChange}
                                onFocus={() => setLinkFocus(true)}
                                onBlur={() => setLinkFocus(false)}
                            />
                            {i > 0 && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteLink(i);
                                        setNumOfLinks(numOfLinks - 1)
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        color="black"

                                        className="h-[10px]"
                                    />
                                </button>
                            )}
                        </div>

                        {/*Only render add another link p tag for the first and second field*/}
                        {numOfLinks === 1 && i === 0
                            ? <p className="text-xs mt-2 hover:underline font-semibold" onClick={() => setNumOfLinks(numOfLinks + 1)}>+ Add Another Link</p>
                            : numOfLinks === 2 && i === 1
                                ? <p className="text-xs mt-2 hover:underline font-semibold" onClick={() => setNumOfLinks(numOfLinks + 1)}>+ Add Another Link</p>
                                : null
                        }
                        {numOfLinks === 1 && i === 0 && linkFocus && !validLink
                            ?
                            <div className="bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1 items-center">
                                <FontAwesomeIcon
                                    icon={faInfoCircle}
                                    className="mr-2"
                                    size="lg"
                                />
                                <p className="text-xs md:text-sm"> One or more links are not correctly formatted. <br /> Ex. test.com, www.test, etc...</p>
                            </div>
                            : numOfLinks === 2 && i === 1 && linkFocus && !validLink
                                ? <div className="bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1 items-center">
                                    <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="mr-2"
                                        size="lg"
                                    />
                                    <p className="text-xs md:text-sm"> One or more links are not correctly formatted. Ex. test.com, www.test, etc...</p>
                                </div>
                                : numOfLinks === 3 && i === 2 && linkFocus && !validLink ?
                                    <div className="bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-2 items-center">
                                        <FontAwesomeIcon
                                            icon={faInfoCircle}
                                            className="mr-2"
                                            size="lg"
                                        />
                                        <p className="text-xs md:text-sm"> One or more links are not correctly formatted. Ex. test.com, www.test, etc...</p>
                                    </div> : null
                        }
                    </div>
                </>
            )
        }

        return linkFields
    }

    return (
        <div className="flex flex-col items-center w-full gap-4">

            <div className="flex flex-col items-start w-full ">
                <label htmlFor="hours" className="text-md md:text-base ">Number of hours currently worked per week</label>
                <input
                    type="text"
                    id="hours"
                    name="workedHrs"
                    className="border-1 border-gray-400 p-2 rounded-lg w-full mt-1"
                    value={formData.workedHrs}
                    onChange={handleFormChange}
                    onFocus={() => setHoursFocus(true)}
                    onBlur={() => setHoursFocus(false)}
                />
                {/* {hoursFocus && !validHours && (
                    <div className="bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row w-full mt-1 items-center">
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="mr-2"
                            size="lg"
                        />
                        <p className="text-xs md:text-sm"> Numbers only</p>
                    </div>
                )} */}
            </div>

            <div className="flex flex-col items-start w-full ">
                <label htmlFor="projects" className="text-md md:text-base">Projects Done? Please explain them</label>
                <textarea
                    id="projects"
                    name="projects"
                    className="border-1 border-gray-400 p-2 rounded-lg w-full mt-1"
                    value={formData.projects}
                    onChange={handleFormChange}
                />
            </div>

            <div className="flex flex-col items-start w-full ">
                <label htmlFor="jobs" className="text-md md:text-base">Jobs that you have done that will help be a team player</label>
                <textarea
                    id="jobs"
                    name="jobs"
                    className="border-1 border-gray-400 p-2 rounded-lg w-full mt-1"
                    value={formData.jobs}
                    onChange={handleFormChange}
                />
            </div>

            <div className="flex flex-col items-start w-full">
                <label className="text-md md:text-base ">Links? Github, LinkedIn, Personal Site, etc...</label>
                {renderLinkFields()}
            </div>

            {/*Reference section **** Go in an make it so that if you swap to another method or back to none empty out states*/}
            <div className="flex flex-col items-start w-full ">
                <label htmlFor="reference" className="text-md md:text-base">
                    Any faculty that can speak highly of your work ethic?
                    If so please provide their name and contact
                </label>

                <label htmlFor="reference" className="text-sm mt-2 font-semibold">Name</label>
                <input
                    type="text"
                    id="reference"
                    name="referenceName"
                    className="border-1 border-gray-400 p-2 rounded-lg w-full mt-1"
                    value={formData.referenceName}
                    onChange={handleFormChange}
                />

                <label htmlFor="contact" className="text-sm mt-2 font-semibold">Contact Method</label>
                <div className="w-full">
                    <select
                        className="border-1 border-gray-400 p-2 rounded-lg w-full mt-1"
                        id="contact"
                        name="referenceContactType"
                        value={formData.referenceContactType}
                        onChange={
                            (e) => {
                                console.log("Event:", e.target.value)
                                handleFormChange(e);
                                if (e.target.value === "email") {
                                    setSelectEmail(true)
                                    setSelectPhone(false)
                                } else if (e.target.value === "phone") {
                                    setSelectEmail(false)
                                    setSelectPhone(true)
                                } else {
                                    setSelectEmail(false)
                                    setSelectPhone(false)
                                }
                            }}

                    >
                        <option value="">Select Contact Method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Number</option>
                    </select>
                    {selectEmail && (
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="text-sm mt-2 font-semibold">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="referenceEmail"
                                className="border-1 border-gray-400 p-2 rounded-lg mt-1"
                                value={formData.referenceEmail}
                                onChange={handleFormChange}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            {emailFocus && !validEmail && (

                                <div className='bg-black text-white px-2 py-3 rounded-md mb-3 flex flex-row'>
                                    <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="mr-2"
                                        size="lg"
                                    />
                                    <p className='text-xs md:text-sm'>Email must end in @txstate.edu <br />
                                        Allowed characters: letters, numbers, . _ % + - </p>
                                </div>
                            )}
                        </div>
                    )}
                    {selectPhone && (
                        <div className="flex flex-col w-full">
                            <label htmlFor="phone" className="text-sm mt-2 font-semibold">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                name="referencePhone"
                                className="border-1 border-gray-400 p-2 rounded-lg mt-1"
                                value={formData.referencePhone}
                                onChange={handleFormChange}
                                onFocus={() => setPhoneFocus(true)}
                                onBlur={() => setPhoneFocus(false)}
                            />
                            {phoneFocus && !validPhone && formData.referencePhone && (
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
                    )}
                </div>

            </div>

        </div>
    )
}

export default FormStage2