import { InfluencerDTO } from "../dto/influencerDTO.js";
import { BrandDTO } from "../dto/brandDTO.js";
import { DefaultFormDTO } from "../dto/defaultFormDTO.js";
import { createMail } from "../service/nodemailer.service.js";
import { reCaptchaValidator } from "../utils/utils.js";

export const sendForm = async (req, res, next) => {
    try {
        const { data } = req.body;
        const { type } = req.params;


        const response = await reCaptchaValidator(data.recaptchaToken);
        if (!response) throw new Error('Invalid reCAPTCHA token, try again.');
        let userData = {};
        switch (type) {
            case 'influencer':
                userData = new InfluencerDTO(
                    data.name,
                    data.email,
                    data.socialLink,
                    data.niche,
                    data.message)
                break;
            case 'brand':
                userData = new BrandDTO(
                    data.name,
                    data.contact,
                    data.email,
                    data.website,
                    data.budget,
                    data.message)
                break;
            case 'other':
                userData = new DefaultFormDTO(
                    data.name,
                    data.email,
                    data.message)
                break;
            default:
                throw new Error('Invalid form type');

        }

        await createMail(data.email, data, type);
        return res.status(200).send({ status: 'success', message: 'Formulario enviado!' })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 'error', message: error.message || 'Error al enviar el formulario' });
    }
}