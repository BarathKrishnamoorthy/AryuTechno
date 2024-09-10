const File = require('../Model/FileModel');

const uploadFiles = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const yourFileType = req.body.filetype; 
        const yourFileSize = parseInt(req.body.filesize); 

        const myFileType = req.file.mimetype; 
        const myFileSize = req.file.size; 
        const filePath = req.file.path;

        console.log('File Type:', myFileType);
        console.log('File Size:', myFileSize);
        console.log('File Path:', filePath);

        if (yourFileType && myFileType !== yourFileType) {
            return res.status(400).json({ error: `Invalid file type. Expected: ${yourFileType}, but got: ${myFileType}` });
        }

        if (yourFileSize && myFileSize > yourFileSize) {
            return res.status(400).json({ error: `File size exceeds the limit of ${yourFileSize} bytes. Uploaded size: ${myFileSize} bytes.` });
        }

        if (!filePath) {
            return res.status(500).json({ error: 'File path is not set properly' });
        }

        const newFile = {
            filetype: myFileType,
            filesize: myFileSize,
            filePath: filePath
        };

        const savedFile = await File.create(newFile);
        console.log('Saved File:', savedFile);
        res.status(201).json({
            message: 'File uploaded successfully',
            file: savedFile
        });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ error: 'File upload failed' });
    }
};

const getFile = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        console.error('Error retrieving files:', error);
        res.status(500).json({ message: 'Failed to retrieve files', error: error.message });
    }
};

module.exports = { uploadFiles, getFile };
