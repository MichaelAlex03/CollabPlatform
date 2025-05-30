export const formRegex = {
    phoneNum: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
    studentName: /^[A-Z][a-z]+(?:[-' ][A-Z][a-z]+)*$/,
    department: /^[A-Za-z]+(?:[ '&-][A-Za-z]+)*$/,
    workedHrs: /^[0-9]+$/,
    links: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]\.)+([a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]{1,})(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?$/,
    referenceEmail: /^[a-zA-Z0-9._%+-]+@txstate\.edu$/,
    referencePhone: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/

}


const useFormRegex = (formData) => {
    const v1 = formRegex.phoneNum.test(formData.phoneNum);
    const v2 = formRegex.studentName.test(formData.studentName);
    const v3 = formRegex.department.test(formData.department);
    const v4 = formRegex.workedHrs.test(formData.workedHrs);
    const v5 = formRegex.referenceEmail.test(formData.referenceEmail);
    const v6 = formRegex.referencePhone.test(formData.referencePhone);

    if (!v1) {
        return ["Phone Number is invalid.", 1];
    }
    if (!v2) {
        return ["Student name is invalid.", 1];
    }
    if (!v3) {
        return ["Department name is invalid", 1];
    }
    if (!v4) {
        return ["Worked hours must be numbers only", 2];
    }

    //test each link only if it is not empty
    for (let i = 0; i < formData.links.length; i++) {
        if (formData.links[i] !== '') {
            if (!formRegex.links.test(formData.links[i])) {
                return ["Invalid link format", 3]
            }
        }
    }

    if (formData.referenceEmail && !v5) {
        return ["Invalid email format", 2];
    } 

    if (formData.referencePhone && !v6) {
        return ["Invalid phone number format", 2];
    }

    return ["None", 3];
};

//Check if form is missing any required fields
export const formNullCheck = (formData) => {
    if (!formData.studentName
        || !formData.year
        || (formData.year !== 'graduate' && (formData.degree === 'Select your degree' || !formData.expectedGrad))
        || (formData.year === 'graduate' && (formData.degreeCompleted === 'Select your degree'))
        || !formData.department
        || !formData.phoneNum
        || !formData.workedHrs
        || !formData.projects
        || !formData.jobs
        || !formData.links
        || !formData.referenceContactType
        || (formData.referenceContactType === 'email' && !formData.referenceEmail)
        || (formData.referenceContactType === 'phone' && !formData.referencePhone)
        || !formData.resume
    ) {
        return true;
    } else {
        return false;
    }
}

export default useFormRegex;