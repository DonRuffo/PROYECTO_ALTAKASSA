import { Router } from "express";
import { confirmarEmail, login, register } from "../controllers/ControladorAdmin.js";


const router = Router()

router.post('/registro',register)

router.get('/confirmar/:token',confirmarEmail)

router.post('/login',login)

export default router