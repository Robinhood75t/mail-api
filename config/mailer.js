const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth : {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
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