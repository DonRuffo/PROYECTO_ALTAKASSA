import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.HOST, // Replace with your provider's SMTP server
    port: process.env.PORT_EMAIL, // Port may vary depending on your provider
    auth: {
      user: process.env.MAIL_PROVIDER, // Replace with your email address
      pass: process.env.PASSWORD_MAIL // Replace with your email password
    }
  });

const sendMailToUser = () =>{
    
}
