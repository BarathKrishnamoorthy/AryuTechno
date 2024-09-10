const express = require('express');

const { createProject, getProjects } = require('../Controller/StudentController');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const studentStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'StudentID/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    const fileTypes = /jpg|jpeg|png|pdf/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb(new Error('Invalid files , Use this type of files to store JPG, JPEG, and PNG files are allowed.'));
    }
};


const studentUpload = multer({
    storage: studentStorage,
    limits: {
        fileSize: function (req, file, cb) {
            const limit = {
                'image/jpeg': 10 * 1024 * 1024, 
                'image/jpg': 20 * 1024,         
                'image/png': 10 * 1024 * 1024,  
            };
            return limit[file.mimetype];
        }
    },
    fileFilter: fileFilter
});
router.post('/student', studentUpload.single('idPath'), createProject);
router.get('/', getProjects);

module.exports = router;
