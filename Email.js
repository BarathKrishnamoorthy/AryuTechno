require('dotenv').config();
const nodemailer = require('nodemailer');
const emailTemplate = require('./views/emailTemplate');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USEREMAIL_ID,
        pass: process.env.USERPASS_ID
    }
});

const sendEmail = async (recipient, subject) => {
    console.log('Sending email to:', recipient);
    console.log('Using template:', emailTemplate);
    const mailOptions = {
        from: process.env.USEREMAIL_ID,
        to: recipient,
        subject: subject,
        html: emailTemplate
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${recipient}`);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};

module.exports = sendEmail;
