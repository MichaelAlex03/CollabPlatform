const bcrypt = require('bcrypt');
const Faculty = require('../../model/Faculty');

const handleNewFaculty = async (req, res) => {
    const { id, user, pass, phoneNum, email } = req.body;
    if (!id || !user || !pass || !phoneNum || !email) return res.status(400).json({ message: 'missing fields' });

    const duplicate = await Faculty.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);

    try {
        const hashedPwd = await bcrypt.hash(pass, 10);
        await Faculty.create({
            facultyId: id,
            username: user,
            password: hashedPwd,
            phoneNumber: phoneNum,
            email,
        });

        res.status(201).json({message: `New faculty ${user} was created`});
    } catch (error) {
        res.sendStatus(500)
    }
}

module.exports = {
    handleNewFaculty
}
