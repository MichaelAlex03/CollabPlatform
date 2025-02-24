const bcrypt = require('bcrypt');
const Student = require('../../model/Student');

//Makes sure A number starts with A and is followed by 8 digits
const ANUM_REGEX = /^A\d{8}$/

const handleNewStudent = async (req, res) => {
    const { user, pass, id, email } = req.body;

    //Check if user already exists
    const duplicate = await Student.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);

    //checks if A number is in the correct format
    if (!ANUM_REGEX.test(id)) return res.sendStatus(400);

    try {
        const hashedPwd = await bcrypt.hash(pass, 10);
        await Student.create({
            username: user,
            password: hashedPwd,
            id,
            email,
            firstTime: true
        });
        res.status(201).json({ message: `New student ${user} created` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    handleNewStudent
};