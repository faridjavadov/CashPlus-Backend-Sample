import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: 'login',
        user: "faridij@code.edu.az",
        pass: "grvybrcdtkchngzv",
    },
});

export function confirmCodeEmail(userEMail, confirmCode) {
    transporter.sendMail({
        from: 'faridij@code.edu.az',
        to: userEMail,
        subject: "Confirm Code",
        text: "OTP Code: " + confirmCode,
    });
}


