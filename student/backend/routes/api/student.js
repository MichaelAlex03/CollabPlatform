const express = require('express');
const router = express.Router();
const multer = require('multer');
const studentController = require('../../controller/api/studentController');

const storage = multer.memoryStorage();
const upload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' || 
            file.mimetype === 'application/msword' ||
            file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            cb(null, true);
        } else {
            cb(null, false);
            cb(new Error('Only .pdf, .doc and .docx format allowed!'));
        }
    }
});

router.route('/')
    .post(
        upload.fields([
            { name: 'resume', maxCount: 1 },
            { name: 'letterOfRec', maxCount: 1 }
        ]),
        studentController.handleAddFormData
    );

router.route('/:id')
    .get(studentController.fetchUser)

module.exports = router