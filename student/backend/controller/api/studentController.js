const Student = require('../../model/Student');
const Skill = require('../../model/Skill');


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

    //Want to make sure this is there first time adding data, if not they want to go to update route
    const firstTime = await Skill.findOne({ id }).exec();
    if (firstTime) {
        return res.sendStatus(409);
    }


    //After passing all validation try creating mongo db document
    try {

        await Skill.create({
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