const Students = require('../Model/Students'); 
const studentMail=require('../StudentEmail');
exports.createProject = async (req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).json({ message: 'File is required' });
        }

        const projectData = {
            name: req.body.name,
            emailID:req.body.emailID,
            age: req.body.age,
            fathername: req.body.fathername,
            mothername: req.body.mothername,
            phonenumber: req.body.phonenumber,
            city: req.body.city,
            college: req.body.college,
            yearofpursuing: req.body.yearofpursuing,
            textarea: req.body.textarea,
            idPath: req.file ? req.file.path :null
        };

        const newProject = new Students(projectData);
        await newProject.save();
        res.status(201).json({ message: `Hello ${req.body.name}, data successfully submitted.` });
        
        await studentMail(req.body.emailID, 'Aryu Technology', '<p>Thank you for applying!</p>');

        
    } catch (error) {
        console.error('Error creating project:', error); 
        res.status(500).json({ message: 'Internal server error' }); 
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Students.find(); 
        res.status(200).json(projects); 
    } catch (error) {
        console.error('Error fetching projects:', error); 
                res.status(500).json({ message: 'Internal server error' }); 
    }
};
