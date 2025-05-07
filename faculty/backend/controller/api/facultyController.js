const Project = require('../../model/Project');
const Faculty = require('../../model/Faculty');


const handleAddProject = async (req, res) => {
    const { projectData, id } = req.body;

    const technicalSkills = projectData.technicalSkills.split(",").map(item => item.trim());
    const nonTechnicalSkills = projectData.nonTechnicalSkills.split(",").map(item => item.trim());
    const milestones = projectData.milestones.split("\n").map(item => item.trim()).filter(item => item !== '');

    console.log(projectData)

    try {
        await Project.create({
            facultyId: String(id),
            title: projectData.title,
            description: projectData.description,
            type: projectData.type,
            cost: projectData.cost,
            technicalSkills,
            nonTechnicalSkills,
            timeline: projectData.timeline,
            milestones
        })

        const faculty = await Faculty.findOne({ facultyId: id }).exec();
        faculty.firstTime = false;
        await faculty.save();

        res.status(201).json({ "message ": `succesfully added project for faculty ${id}` });

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

}

module.exports = {
    handleAddProject
}

