const Intern = require('../Model/Inten');
const sendEmail = require('../Email');


exports.createIntern = async (req, res) => {
    try {

        const internData = {
            name: req.body.name,
            emailID: req.body.emailID,
            age: req.body.age,
            mobilenumber: req.body.mobilenumber,
            city: req.body.city,
            college: req.body.college,
            yearofpassout: req.body.yearofpassout,
            role: req.body.role,
            resume: req.file ? req.file.path : null
        };


        const newIntern = new Intern(internData);
        await newIntern.save();

        res.status(201).json({ message: `Hello ${req.body.name}, Your application is successfully added` });

        await sendEmail(req.body.emailID, 'Aryu Technology', '<p>Thank you for applying!</p>');



    } catch (error) {

        res.status(500).json({ message: 'Failed to submit application', error: error.message });
    }
};


exports.getInterns = async (req, res) => {
    try {

        const interns = await Intern.find();
        res.status(200).json(interns);
    } catch (error) {

        res.status(500).json({ message: 'Failed to retrieve interns', error: error.message });
    }
};
