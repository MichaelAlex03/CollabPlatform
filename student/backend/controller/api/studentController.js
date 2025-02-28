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
    
    

    //Want to make sure at least one field is checked. Student should have at least one skill
    if (!neural_networks && !LLM && !data_analysis && !MERN && !web_designer && !jira && !cplus && !java && !python && !sql) {
        return res.status(400).json({ 'message': 'Please select at least one skill' });
    }

    //Want to check if any input from formData is not filled in




     // Transform the skillsData object into an array of skill objects
     const skills = [];
     if (neural_networks) skills.push({ name: 'neural_networks', level: neural_networks });
     if (LLM) skills.push({ name: 'LLM', level: LLM });
     if (data_analysis) skills.push({ name: 'data_analysis', level: data_analysis });
     if (MERN) skills.push({ name: 'MERN', level: MERN });
     if (web_designer) skills.push({ name: 'web_designer', level: web_designer });
     if (jira) skills.push({ name: 'jira', level: jira });
     if (cplus) skills.push({ name: 'cplus', level: cplus });
     if (java) skills.push({ name: 'java', level: java });
     if (python) skills.push({ name: 'python', level: python });
     if (sql) skills.push({ name: 'sql', level: sql });



    //After passing all validation try creating mongo db document
    try {

        await StudentProfile.create({
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