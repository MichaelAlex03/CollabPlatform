const StudentProfile = require('../../model/StudentProfile');

const handleAddFormData = async (req, res) => {
    //Get student id
    const { id } = req.body;

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


    //Want to check if any input from formData is not filled in
    if (!studentName
        || !year
        || (year !== 'graduate' && (degree === 'Select your degree' || !expectedGrad))
        || (year === 'graduate' && (degreeCompleted === 'Select your degree'))
        || !department
        || !phoneNum
        || !workedHrs
        || !projects
        || !jobs
        || !links
        || !reference
    ) {
        return res.status(400).json({ 'message': 'Missing form fields' });
    }

    console.log(req.body.skillsData);
    console.log(req.body.formData);
    
    // Transform the skillsData object into an array of skill objects
    const skills = [];
    if (neural_networks) skills.push({ name: 'neural_networks'});
    if (LLM) skills.push({ name: 'LLM'});
    if (data_analysis) skills.push({ name: 'data_analysis' });
    if (MERN) skills.push({ name: 'MERN'});
    if (web_designer) skills.push({ name: 'web_designer'});
    if (jira) skills.push({ name: 'jira'});
    if (cplus) skills.push({ name: 'cplus'});
    if (java) skills.push({ name: 'java'});
    if (python) skills.push({ name: 'python'});
    if (sql) skills.push({ name: 'sql'});



    //After passing all validation try creating mongo db document
    try {

        await StudentProfile.create({
            aNum: id,
            studentName,
            expectedGrad,
            year,
            degree,
            degreeCompleted,
            department,
            phoneNum,
            workedHrs: parseInt(workedHrs),
            projects,
            jobs,
            links,
            reference,
            skills: skills
        });
        res.status(201).json({ 'message': `skills added for student with the id ${id}` });
    } catch (error) {
        // res.sendStatus(500);
        console.log(error)
        res.status(500).json({ 'message': `skills added for student with the id ${id}` });
    }
}
module.exports = {
    handleAddFormData
}
