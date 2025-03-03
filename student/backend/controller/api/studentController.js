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

    //Check if any of the links are empty
    const validLinks = []
    for (let i = 0; i < links.length; i++){
        if(links[i] !== ''){
            validLinks[i] = links[i]
        }
    }



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
            links: validLinks,
            reference,
            skills,
        });
        res.status(201).json({ 'message': `skills added for student with the id ${id}` });
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
}
module.exports = {
    handleAddFormData
}
