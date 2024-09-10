const { body, validationResult } = require('express-validator');

// Validation rules
const internValidationRules = () => [
    body('name').notEmpty().withMessage('Name is required'),
    body('emailID').isEmail().withMessage('Invalid Email ID format'),
    body('age').isInt({ min: 18, max: 60 }).withMessage('Age must be between 18 and 60'),
    body('mobilenumber').isLength({ min: 10, max: 10 }).withMessage('Mobile number must be exactly 10 digits'),
    body('city').notEmpty().withMessage('City is required'),
    body('college').notEmpty().withMessage('College is required'),
    body('yearofpassout').isLength({ min: 4, max: 4 }).withMessage('Year of passout must be exactly 4 digits'),
    body('role').notEmpty().withMessage('Role is required'),
    body('resume').notEmpty().withMessage('Resume is required')
];


const validateIntern = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().reduce((acc, error) => {
            acc[error.param] = error.msg;
            return acc;
        }, {});

        if (req.xhr) { 
                        return res.status(400).json({ errors: errorMessages });
        }

        return res.render('inten', { 
            errors: errorMessages,
            formData: req.body
        });
    }
    next();
};

module.exports = { internValidationRules, validateIntern };
