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

    //Go through all skills

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
            links: formData.links,
            referenceName: formData.referenceName,
            referenceContactType: formData.referenceContactType,
            referenceEmail: formData.referenceEmail,
            referencePhone: formData.referencePhone,
            skills: skillsData,
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
