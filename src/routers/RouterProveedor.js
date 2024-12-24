import { Router } from "express";
import { RecuperarContrasenia, 
        ConfirmarRecuperarContrasenia,
        HistorialTrabajos,
        MostrarTrabajosAgendados,
        CancelarTrabajosAgendados, 
        registroProve,
        confirmarEmail,
        loginProve,
        RecuperarContraseñaProve,
        ComprobarParaRestablecer,
        ActualizarPerfilProveedor,
        ActualizarContraseniaProve} from "../controllers/controladorProveedor.js";

const routeProveedor = Router()

routeProveedor.post('/registroP',registroProve)
routeProveedor.get('/confirmarP/:token',confirmarEmail)
routeProveedor.post('/loginP', loginProve)
routeProveedor.post('/recuperar-contraseniaP', RecuperarContraseñaProve)
routeProveedor.get('/restablecer-contraseniaP/:token', ComprobarParaRestablecer)
routeProveedor.post('/actualizar-perfilP', ActualizarPerfilProveedor)
routeProveedor.post('/actualizar-contraseniaP', ActualizarContraseniaProve)

routeProveedor.post('/recuperar-contrasenia', RecuperarContrasenia)
routeProveedor.post('/restablecer-contrasenia', ConfirmarRecuperarContrasenia)
routeProveedor.get('/trabajos/:proveedor', HistorialTrabajos)
routeProveedor.get('/trabajos-agendados/:proveedor', MostrarTrabajosAgendados)
routeProveedor.post('/cancelar-trabajo/', CancelarTrabajosAgendados)


export default routeProveedor