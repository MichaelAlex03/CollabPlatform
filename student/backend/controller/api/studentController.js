const StudentProfile = require("../../model/StudentProfile");
const Student = require("../../model/Student");

const handleAddFormData = async (req, res) => {
  // Parse JSON strings from FormData
  const id = req.body.id;
  const skillsData = JSON.parse(req.body.skillsData);
  const formData = JSON.parse(req.body.formData);

  // Get files if they exist
  const resumeFile = req.files?.resume?.[0];
  const letterOfRecFile = req.files?.letterOfRec?.[0];

  // Create file data objects for MongoDB
  const resumeData = resumeFile
    ? {
      data: resumeFile.buffer,
      contentType: resumeFile.mimetype,
      filename: resumeFile.originalname,
    }
    : undefined;

  const letterOfRecData = letterOfRecFile
    ? {
      data: letterOfRecFile.buffer,
      contentType: letterOfRecFile.mimetype,
      filename: letterOfRecFile.originalname,
    }
    : undefined;

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
      letterOfRec: letterOfRecData,
    });

    const student = await Student.findOne({ id }).exec();
    student.firstTime = false;
    await student.save();

    res
      .status(201)
      .json({
        message: `skills added for student with the id ${id}`,
        firstTime: student.firstTime,
      });
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

const fetchUser = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentProfile.findOne({ aNum: id }).exec();

    if (!student) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json({ student });
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};

const updateUser = async () => {

  const formData = JSON.parse(req.body.formData);
  const skills = JSON.parse(req.body.skillsData);

  const resumeFile = req.file.resume[0];
  const letterOfRecFile = req.file?.letterOfRec?.[0];

  const resumeData = {
    data: resumeFile.buffer,
    contentType: resumeFile.mimetype,
    filename: resumeFile.originalname
  }

  const letterOfRecData = letterOfRecFile ? {
    data: letterOfRecFile.buffer,
    contentType: letterOfRecFile.mimetype,
    filename: letterOfRecFile.originalname
  } : undefined

  try {

    const student = await StudentProfile.findOne({ aNum: formData.aNum });

    for (key in formData) {
      if (key === 'skills') {
        student[key] = skills;
      } else if (key === 'resume') {
        student[key] = resumeData
      } else if (key === 'letterOfRec') {
        student[key] = letterOfRecData
      } else {
        student[key] = formData[key];
      }
    }

    await student.save();
    res.status(200).json({ "message": "succesfully updated student" });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);

  }
};

module.exports = {
  handleAddFormData,
  fetchUser,
  updateUser
};
