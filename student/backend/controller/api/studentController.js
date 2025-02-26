const Student = require('../../model/Student');
const Skill = require('../../model/Skill');


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

    //Want to make sure at least one field is checked. Student should have at least one skill
    if (!neural_networks && !LLM && !data_analysis && !MERN && !web_designer && !jira && !cplus && !java && !python && !sql) {
        return res.status(400).json({ 'message': 'Please select at least one skill' });
    }

    //Want to make sure this is there first time adding data, if not they want to go to update route
    const firstTime = await Skill.findOne({ id }).exec();
    if (firstTime) {
        return res.sendStatus(409);
    }

    //Get properties from form object

    //After passing all validation try creating mongo db document
    try {

        await Skill.create({
            id,
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