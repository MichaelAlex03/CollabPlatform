const StudentProfile = require('../../model/StudentProfile');


const handleAddFormData = async (req, res) => {
    //Get student id
    const { aNum: id } = req.body;

    //Get properties from skillsData object
    const {
        neural_networks,
        LLM,
        data_analysis,
        MERN,
        web_designer,
        jira,
        cplus,
        java,
        python,
        sql
    } = req.body.skillsData;

    //Get properties from form object
    const {
        studentName,
        expectedGrad,
        year,
        degree,
        degreeCompleted,
        department,
        phoneNum,
        workedHrs,
        projects,
        jobs,
        links,
        reference
    } = req.body.formData


    //Want to make sure at least one field is checked. Student should have at least one skill
    if (!neural_networks && !LLM && !data_analysis && !MERN && !web_designer && !jira && !cplus && !java && !python && !sql) {
        return res.status(400).json({ 'message': 'Please select at least one skill' });
    }

    //Want to check if any input from formData is not filled in
    if (!studentName
        || !year
        || (year !== 'graduate' && degree === 'Select your degree' || !expectedGrad)
        || (year === 'graduate' && degreeCompleted === 'Select your degree')
        || !department
        || !phoneNum
        || !workedHrs
        || !projects
        || !jobs
        || links[0] === ''
        || !reference
    ) {
        return res.status(400).json({ 'message': 'Missing form fields' });
    }



    // Transform the skillsData object into an array of skill objects
    const skills = [];
    if (neural_networks) skills.push('neural_networks');
    if (LLM) skills.push('LLM');
    if (data_analysis) skills.push('data_analysis');
    if (MERN) skills.push('MERN');
    if (web_designer) skills.push('web_designer');
    if (jira) skills.push('jira');
    if (cplus) skills.push('cplus');
    if (java) skills.push('java');
    if (python) skills.push('python');
    if (sql) skills.push('sql');



    //After passing all validation try creating mongo db document
    try {

        await StudentProfile.create({
            aNum,
            studentName,
            expectedGrad,
            year,
            degree,
            degreeCompleted,
            department,
            phoneNum,
            workedHrs,
            projects,
            jobs,
            links,
            reference,
            links: req.body.skillsData
        });
        res.status(201).json({ 'message': `skills added for student with the id ${id}` });
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = {
    handleAddFormData
}