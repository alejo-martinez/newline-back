import nodemailer from 'nodemailer';
import config from './config.js';

export const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.nodemailerUser,
        pass: config.nodemailerPassword
    }
});