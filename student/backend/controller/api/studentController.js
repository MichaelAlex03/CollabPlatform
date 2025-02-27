const Student = require('../../model/Student');
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



    //After passing all validation try creating mongo db document
    try {

        await StudentInfo.create({
            aNum ,
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
        });
        res.status(201).json({ 'message': `skills added for student with the id ${id}` });
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = {
    handleAddFormData
}