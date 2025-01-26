const bcrypt = require('bcrypt');
const Student = require('../../model/Student');

const handleNewStudent = async (req, res) => {
    const { user, pass, netId, email } = req.body;
    if (!user || !pass || !netId || !email) return res.status(400).json({ message: 'missing fields' });

    const duplicate = await Student.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPwd = await bcrypt.hash(pass, 10);
        await Student.create({
            username: user,
            password: hashedPwd,
            netId,
            email,
        });
        res.status(201).json({ message: `New student ${user} created` });
    } catch (error) {
        res.staus(500).json({ message: error.message });
    }
}

module.exports = {
    handleNewStudent
};