const StudentProfile = require('../../model/StudentProfile');
const Student = require('../../model/Student');

const handleAddFormData = async (req, res) => {
    // Parse JSON strings from FormData
    const id = req.body.id;
    const skillsData = JSON.parse(req.body.skillsData);
    const formData = JSON.parse(req.body.formData);

    // Get files if they exist
    const resumeFile = req.files?.resume?.[0];
    const letterOfRecFile = req.files?.letterOfRec?.[0];

    console.log("Resume", resumeFile);
    console.log("Letter", letterOfRecFile);

    // Create file data objects for MongoDB
    const resumeData = resumeFile ? {
        data: resumeFile.buffer,
        contentType: resumeFile.mimetype,
        filename: resumeFile.originalname
    } : undefined;

    const letterOfRecData = letterOfRecFile ? {
        data: letterOfRecFile.buffer,
        contentType: letterOfRecFile.mimetype,
        filename: letterOfRecFile.originalname
    } : undefined;

    // Transform skillsData into array of skill objects
    const skills = [];
    if (skillsData.neural_networks) skills.push({ name: 'neural_networks'});
    if (skillsData.LLM) skills.push({ name: 'LLM'});
    if (skillsData.data_analysis) skills.push({ name: 'data_analysis' });
    if (skillsData.MERN) skills.push({ name: 'MERN'});
    if (skillsData.web_designer) skills.push({ name: 'web_designer'});
    if (skillsData.jira) skills.push({ name: 'jira'});
    if (skillsData.cplus) skills.push({ name: 'cplus'});
    if (skillsData.java) skills.push({ name: 'java'});
    if (skillsData.python) skills.push({ name: 'python'});
    if (skillsData.sql) skills.push({ name: 'sql'});

    // Handle links
    const validLinks = [];
    for (let i = 0; i < formData.links.length; i++) {
        if(formData.links[i] !== '') {
            validLinks[i] = formData.links[i];
        }
    }

    try {
        await StudentProfile.create({
            aNum: id,
            studentName: formData.studentName,
            expectedGrad: formData.expectedGrad,
            year: formData.year,
            degree: formData.degree,
            degreeCompleted: formData.degreeCompleted,
            department: formData.department,
            phoneNum: formData.phoneNum,
            workedHrs: parseInt(formData.workedHrs),
            projects: formData.projects,
            jobs: formData.jobs,
            links: validLinks,
            referenceName: formData.referenceName,
            referenceContactType: formData.referenceContactType,
            referenceEmail: formData.referenceEmail,
            referencePhone: formData.referencePhone,
            skills,
            resume: resumeData,
            letterOfRec: letterOfRecData
        });

        const student = await Student.findOne({ id }).exec();
        student.firstTime = false;
        await student.save();

        res.status(201).json({ 'message': `skills added for student with the id ${id}`, firstTime: student.firstTime });
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
module.exports = {
    handleAddFormData
}
