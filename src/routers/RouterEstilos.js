import controladorEstilos from "../controllers/ControladorEstilos.js";

import { Router } from "express";

const routerEstilos = Router()

routerEstilos.get('/:archivo', controladorEstilos)

export default routerEstilos