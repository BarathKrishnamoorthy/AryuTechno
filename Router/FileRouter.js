const express = require('express');
const { uploadFiles, getFile } = require('../Controller/FileController');
const multer = require('multer');
const path = require('path');

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadFolder = req.body.uploadFolder || 'uploads/';
        cb(null, uploadFolder);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    const allowedTypes = req.body.allowedTypes || 'jpg,jpeg,png,pdf';
    const fileTypes = new RegExp(allowedTypes.replace(/,/g, '|'));
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb(new Error(`Invalid file type. Allowed types are: ${allowedTypes}. Received: ${file.mimetype}`));
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 
    },
    fileFilter: fileFilter
});


router.post('/upload', upload.single('file'), uploadFiles);
router.get('/files', getFile);

module.exports = router;
