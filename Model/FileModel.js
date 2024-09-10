const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filetype: {
        type: String,
        required: true
    },
    filesize: {
        type: Number,  
        required: true
    },
    filePath: {  
        type: String,
        required: true
    }
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
