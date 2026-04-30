import nodemailer from 'nodemailer';
import { htmlEmail } from './htmlEmail.js';
export const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // كود صحيح
    const messageConfig = {
        from: `Noor Store <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        //text:options.message
        html: htmlEmail(options.message)
    };
    const info = await transporter.sendMail(messageConfig);
    return info;
};
//# sourceMappingURL=sendEmail.js.map