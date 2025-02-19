const bcrypt = require('bcrypt');
const Faculty = require('../../model/Faculty');

const handleNewFaculty = async (req, res) => {
    const { id, name, pass, department, email } = req.body;

    const duplicate = await Faculty.findOne({ name: name }).exec();
    if (duplicate) return res.sendStatus(409);


    //Check if email is a valid tstate email

    //Check if id is actually a number
    const parsedId = parseInt(id)
    if (typeof parsedId != Number) {
        return res.status(400).json({ message: "invalid id entry"})
    }



    try {
        const hashedPwd = await bcrypt.hash(pass, 10);
        await Faculty.create({
            facultyId: parseInt(id),
            name: name,
            password: hashedPwd,
            department: department,
            email,
        });

        res.status(201).json({message: `New faculty ${name} was created`});
    } catch (error) {
        res.sendStatus(500)
    }
}

module.exports = {
    handleNewFaculty
}
