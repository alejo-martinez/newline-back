import { transport } from '../config/nodemailer.config.js';
import config from '../config/config.js';
import { generateEmailHtml } from '../utils/utils.js';

export const createMail = async (userEmail, data, type) => {
    try {
        await transport.sendMail({
            from: `"Formulario Web" <${config.newlineEmail}>`,
            to: config.newlineEmail,
            replyTo: userEmail,
            subject: 'Nuevo mensaje del formulario web.',
            html: generateEmailHtml(data, type)
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}
