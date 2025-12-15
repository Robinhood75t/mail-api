const express = require("express");
const transport = require("../config/mailer");
const router = express.Router();

router.options("/contact", (req, res) => {
  res.sendStatus(204);
});

router.post("/contact" , async (req , res) => {
    try {
        const { name , email ,phone , subject, message } = req.body;

        if(!name || !email || !phone || !subject || !message){
            return res.status(400).json({message: "all fields are required"});
        }
        const mailOptions = {
        from: `"Website Contact" <bhead@shreejienterprises8.in>`,
        to: "bhead@shreejienterprises8.in",
        replyTo: email, // so you can reply directly to user
        subject: "New Contact Form Submission",
        html: `
            <h3>New Contact Message</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Subject:</b> ${subject}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
        `,
        };

        await transport.sendMail(mailOptions);

        res.status(200).json({message: "email sent successfully"})

    }catch(error){
        res.status(400).json({
            message: "email sending error!!!!",
            error: error.message,
        })
    }
})

module.exports = router;
