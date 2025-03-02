export const formRegex = {
    phoneNum: /^\(?\d{3}\)?[-]?\d{3}[-]?\d{4}$/,
    studentName: /^[A-Z][a-z]+(?:[-' ][A-Z][a-z]+)*$/,
    department: /^[A-Za-z]+(?:[ '&-][A-Za-z]+)*$/,
    workedHrs: /^[0-9]+$/,
    links: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]\.)+([a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*)(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?$/
}


const useFormRegex = (formData) => {
    const v1 = formRegex.phoneNum.test(formData.phoneNum);
    const v2 = formRegex.studentName.test(formData.studentName);
    const v3 = formRegex.department.test(formData.department);
    const v4 = formRegex.workedHrs.test(formData.workedHrs);

    if (!v1) {
        return ["Phone Number is invalid.", 2];
    }
    if (!v2) {
        return ["Student name is invalid.", 2];
    }
    if (!v3) {
        return ["Department name is invalid", 2];
    }
    if (!v4) {
        return ["Worked hours must be numbers only", 3];
    }

    //test each link
    for (let i = 0; i < formData.links.length; i++){
        if (!formRegex.links.test(formData.links[i])){
            return ["Invalid link format", 3]
        }
    }
   
    return ["None", 3];
};

export default useFormRegex;