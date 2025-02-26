const Student = require('../../model/Student');
const Skill = require('../../model/Skill');


const getId = async (id) => {
    const studentId = await Student.findOne({ id }).exec();
    return studentId;
}


const handleAddSkills = (req, res) => {
    //Get student id
    const { id } = req.body

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
    } = req.body.skillsData
}