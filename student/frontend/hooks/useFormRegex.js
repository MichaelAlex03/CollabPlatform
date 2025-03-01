const formRegex = {
    phoneNum: /^\(?\d{3}\)?[-]?\d{3}[-]?\d{4}$/,
    studentName: /^[A-Z][a-z]+(?:[-' ][A-Z][a-z]+)*$/,
    department: /^[A-Za-z]+(?:[ '&-][A-Za-z]+)*$/,
    workedHrs: /^[0-9]+$/
}

const useFormRegex = (formData) => {
    const v1 = formRegex.phoneNum.test(formData.phoneNum);
    const v2 = formRegex.studentName(formData.studentName);
    const v3 = formRegex.department.test(formData.department);
    const v4 = formRegex.workedHrs.test(formData.workedHrs);
    // const v5 = formRegex.phone.test(formData.phone);
    // const v6 = formRegex.date.test(formData.departure_date);
    // const v7 = formRegex.date.test(formData.return_date);
    // const v8 = formRegex.accommodation_preference.test(formData.accommodation_preference);
    // const v9 = formRegex.special_requests.test(formData.special_requests);
    // const v10 = formRegex.health_declaration.test(formData.health_declaration);
    // const v11 = formRegex.emergency_contact_name.test(formData.emergency_contact_name);
    // const v12 = formRegex.phone.test(formData.emergency_contact_number);
    // const v13 = formRegex.medical_conditions.test(formData.medical_conditions);

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
        return ["Worked hours must be numbers only", 1];
    }
    // if (!v5) {
    //     return ["Phone is missing or invalid.", 1];
    // }
    // if (!v6) {
    //     return ["Departure Date is missing or invalid.", 2];
    // }
    // if (!v7) {
    //     return ["Return Date is missing or invalid.", 2];
    // }
    // if (!v8) {
    //     return ["Accommodation Preference is missing or invalid.", 2];
    // }
    // if (!v9) {
    //     return ["Special Requests is invalid.", 2];
    // }
    // if (!v10) {
    //     return ["Health Declaration is missing or invalid.", 3];
    // }
    // if (!v11) {
    //     return ["Emergency Contact Name is missing or invalid.", 3];
    // }
    // if (!v12) {
    //     return ["Emergency Contact Number is missing or invalid.", 3];
    // }
    // if (!v13) {
    //     return ["Medical Conditions is invalid.", 3];
    // }
    return ["None", 3];
};

export default useFormRegex;