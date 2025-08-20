import { Router } from "express";
import { sendForm } from "../controllers/mailer.controller.js";

const router = Router();

router.post('/forms/:type', sendForm);

export default router;