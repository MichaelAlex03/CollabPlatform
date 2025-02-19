const bcrypt = require('bcrypt');
const Faculty = require('../../model/Faculty');

const handleNewFaculty = async (req, res) => {
    const { id, name, pass, department, email } = req.body;

    const duplicate = await Faculty.findOne({ name: name }).exec();
    if (duplicate) return res.sendStatus(409);


    //validate id
    const parsedId = parseInt(id)

    //Check if id is actually a number
    if (isNaN(parsedId)) {
        return res.sendStatus(400)
    }
    
    // Check if parsedId is a positive integer
    if (parsedId <= 0) {
        return res.sendStatus(400)
    }
    
    // Check if original input had decimals
    if (parsedId != id) {
        return res.sendStatus(400)
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
