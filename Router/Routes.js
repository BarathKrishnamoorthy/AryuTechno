const express = require('express');
const internController = require('../Controller/Control');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const internStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
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


const internUpload = multer({
    storage: internStorage,
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

router.post('/intern', internUpload.single('resume'), internController.createIntern);
router.get('/', internController.getInterns);

module.exports = router;
