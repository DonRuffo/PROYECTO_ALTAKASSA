import { Router } from "express";
import { RecuperarContrasenia, 
        ConfirmarRecuperarContrasenia,
        registroProve,
        confirmarEmail,
        loginProve,
        ActualizarPerfilProveedor,
        ActualizarContraseniaProve} from "../controllers/controladorProveedor.js";

const routeProveedor = Router()

routeProveedor.post('/registroP',registroProve)
routeProveedor.get('/confirmarP/:token',confirmarEmail)
routeProveedor.post('/loginP', loginProve)
routeProveedor.post('/actualizar-perfilP', ActualizarPerfilProveedor)
routeProveedor.post('/actualizar-contraseniaP', ActualizarContraseniaProve)

routeProveedor.post('/recuperar-contrasenia', RecuperarContrasenia)
routeProveedor.post('/restablecer-contrasenia/:token', ConfirmarRecuperarContrasenia)


export default routeProveedor