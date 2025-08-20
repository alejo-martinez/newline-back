import axios from "axios";
import config from "../config/config.js";

export function generateEmailHtml(data, formType) {
  const { name, email, message, contact, website, socialLink, niche, budget } = data

  if (formType === "influencer") {
    return `
      <h2>🎥 Influencer / Creator </h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Social Link:</strong> ${socialLink}</li>
        <li><strong>Niche:</strong> ${niche}</li>
        <li><strong>Message:</strong><br />${message}</li>
      </ul>
    `
  }

  if (formType === "brand") {
    return `
      <h2>🏢 Brand / Business </h2>
      <ul>
        <li><strong>Company Name:</strong> ${name}</li>
        <li><strong>Contact Person:</strong> ${contact}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Website:</strong> ${website}</li>
        <li><strong>Budget:</strong> ${budget}</li>
        <li><strong>Message:</strong><br />${message}</li>
      </ul>
    `
  }

  return `
    <h2>📩 General Inquiry</h2>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong><br />${message}</li>
    </ul>
  `
}

export const reCaptchaValidator = async (token) => {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    null,
    {
      params: {
        secret: config.secretKeyRecaptcha,
        response: token,
      },
    }
  )
  // console.log(res.data);
  return res.data.success
}