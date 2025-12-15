const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transport = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST,
    port: process.env.BREVO_SMTP_PORT,
    secure: false,
    auth : {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS
    },
});

transport.verify((error , success) => {
    if(error){
        console.log("SMTP , server error - " , error);
    }else{
        console.log("SMTP connection are made successfully!");
    }
});
    


module.exports = transport;
