import { Router } from "express";
import controladorImagenes from "../controllers/ControladorImagenes.js";

const routerImagenes = Router()

routerImagenes.get('/:archivo', controladorImagenes)

export default routerImagenes