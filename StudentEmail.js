require('dotenv').config();
const nodemailer = require('nodemailer');
const StudentTemplate = require('./views/StudentTemplete');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USEREMAIL_ID,
        pass: process.env.USERPASS_ID
    }
});

const studentmail = async (recipient, subject) => {
    console.log('Sending email to:', recipient);
    console.log('Using template:', StudentTemplate);
    const mailOptions = {
        from: process.env.USEREMAIL_ID,
        to: recipient,
        subject: subject,
        html: StudentTemplate
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${recipient}`);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};

module.exports = studentmail;
