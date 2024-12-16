import { sendMailToAdmin } from "../config/nodemailer.js";
import ModeloAdmin from "../modules/ModeloAdmin.js";
import generarJWT from "../helpers/crearJWT.js"

const register = async (req,res) => {
    const {email, contrasenia} = req.body

    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    
    const verificarEmailBDD = await ModeloAdmin.findOne({email})
    if (verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos el email ya se encuentra registrado"})

    const nuevoAdmin = new ModeloAdmin(req.body)
    nuevoAdmin.contrasenia = await nuevoAdmin.EncriptarContraAdmin(contrasenia)

    const token = nuevoAdmin.GeneradorToken()
    sendMailToAdmin(email, token)

    await nuevoAdmin.save()

    res.status(200).json({msg:"Revisa tu correo electronico para confirmar tu cuenta"})
}
const confirmarEmail = async(req,res)=>{
    const {token} = req.params

    if(!(token)) return res.status(400).json({msg:"Lo sentimos no se puede validar la cuenta"})

    const AdminBDD = await ModeloAdmin.findOne({token})
    if (!AdminBDD?.token) return res.status(400).json({msg:"La cuenta ya a sido confirmada"})

    AdminBDD.token = null
    AdminBDD.confirmEmail = true
    await AdminBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"})
}
const login = async (req,res)=>{
    const {email,contrasenia} = req.body

    if(Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debe llenar todos los campos"})
    
    const AdminBDD = await ModeloAdmin.findOne({email})
    if(AdminBDD?.confirmEmail==false) return res.status(400).json({msg:"Lo sentimos, debe verificar su cuenta"})
    if(!AdminBDD) return res.status(403).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    
    const verificarPassword = AdminBDD.CompararContra(contrasenia)
    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, la contraseña no es correcta"})
    
    const token = generarJWT(AdminBDD._id,"Administrador")

    const nuevoToken = {
        AdminBDD,
        token
    }
    res.status(200).json(nuevoToken)
}


export {
    register,
    confirmarEmail,
    login
}