import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    nodemailerUser: process.env.NODEMAILER_USER,
    nodemailerPassword: process.env.NODEMAILER_PASSWORD,
    newlineEmail: process.env.NEWLINE_EMAIL,
    secretKeyRecaptcha: process.env.SECRET_KEY_RECAPTCHA
}