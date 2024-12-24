import Proveedor from "../modules/ModeloProveedor.js";
import Trabajos from "../modules/ModeloTrabajos.js";
import { sendMailToAdmin, sendMailToAdminRestore } from "../config/nodemailer.js";

const RecuperarContrasenia = async (req, res) =>{
    const {email} = req.body
    if(Object.values(req.body).includes("")) return res.status(404).json({msg:"Por favor, ingrese su correo"})
    const ProveedorBDD = await Proveedor.findOne({email})
    if(!ProveedorBDD) return res.status(404).json({msg:"La cuenta no existe"})
    ProveedorBDD.token = ProveedorBDD.GenerarToken()
    sendMailToAdminRestore(email, ProveedorBDD.token)
    await ProveedorBDD.save()
    res.status(200).json({msg:"Se ha enviado a su correo un enlace para restablecer la contraseña"})
}

const ConfirmarRecuperarContrasenia = async (req, res) =>{
    const {token} = req.params
    const {email, contrasenia} = req.body
    if(!(token)) return res.status(404).json({msg:"Token no identificado"})
    if(Object.values(req.body).includes("")) return res.status(404).json({msg:"Por favor, ingrese sus nuevas credenciales"})
    const ProveedorBDD = await Proveedor.findOne({email})
    if(!ProveedorBDD) return res.status(404).json({msg:"La cuenta no existe, correo inexistente"})    
    if(ProveedorBDD?.token !== token) return res.status(404).json({msg:"Token no autorizado"})
    const nuevaContrasenia = await ProveedorBDD.EncriptarContrasenia(contrasenia)
    ProveedorBDD.contrasenia = nuevaContrasenia
    ProveedorBDD.token = null
    ProveedorBDD.status = true
    await ProveedorBDD.save()
    res.status(200).json({msg:"Contraseña restablecida con éxito"})
}


const HistorialTrabajos = async (req, res) =>{
    const {proveedor} = req.params
    const TrabajosBDD = await Trabajos.find({proveedor})
    if(!TrabajosBDD.length) return res.status(404).json({msg:"El proveedor no ha realizado trabajos"})
    await TrabajosBDD.save()
    res.status(200).json({TrabajosBDD})
}

const MostrarTrabajosAgendados = async (req, res) =>{
    const {proveedor} = req.params
    const status = "Agendada"
    const TrabajosBDD = await Trabajos.find({proveedor, status})
    if(!TrabajosBDD.length) return res.status(404).json({msg:"El proveedor no tiene trabajos agendados"})
    await TrabajosBDD.save()
    res.status(200).json(TrabajosBDD)
}

const CancelarTrabajosAgendados = async (req, res) =>{
    const {_id, nuevoStatus} = req.body
    const TrabajosBDD = await Trabajos.findOne({_id})
    if(!TrabajosBDD) return res.status(404).json({msg:"El trabajo señalado no existe"})
    TrabajosBDD.status = nuevoStatus
    await TrabajosBDD.save()
    res.status(200).json({msg:"El trabajo a sido cancelado"})
}



export {RecuperarContrasenia,
        ConfirmarRecuperarContrasenia,
        HistorialTrabajos,
        MostrarTrabajosAgendados,
        CancelarTrabajosAgendados
}