import { Router } from "express";
import { RecuperarContrasenia, 
        ConfirmarRecuperarContrasenia,
        HistorialTrabajos,
        MostrarTrabajosAgendados,
        CancelarTrabajosAgendados } from "../controllers/controladorProveedor.js";

const routeProveedor = Router()

routeProveedor.post('/recuperar-contrasenia', RecuperarContrasenia)
routeProveedor.post('/restablecer-contrasenia', ConfirmarRecuperarContrasenia)
routeProveedor.get('/trabajos/:proveedor', HistorialTrabajos)
routeProveedor.get('/trabajos-agendados/:proveedor', MostrarTrabajosAgendados)
routeProveedor.post('/cancelar-trabajo/', CancelarTrabajosAgendados)


export default routeProveedor