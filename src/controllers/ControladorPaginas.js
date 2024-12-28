import paginas from "../modules/ModeloArchivos.js";

const controladorInicio = async(req, res) =>{
    try{
        const paginaInicio = await paginas.inicio()
        return res.status(200).sendFile(paginaInicio)
    }catch(error){
        console.log(error)
        res.status(404).send('Error en la obtención de la página')
    }
}

const controladorCrearCuenta = async(req, res) =>{
    try{
        const paginaCuenta = await paginas.crearCuenta()
        return res.status(200).sendFile(paginaCuenta)
    }catch(error){
        console.log(error)
        res.status(404).send('Error en la obtención de la página')
    }
}

const controladorLogin = async(req, res) =>{
    try{
        const paginaLogin = await paginas.login()
        return res.status(200).sendFile(paginaLogin)
    }catch(error){
        console.log(error)
        res.status(404).send('Error en la obtención de la página')
    }
}

const controladorRecuperarContra = async(req, res) =>{
    try{
        const paginaContra = await paginas.recuperarContra()
        return res.status(200).sendFile(paginaContra)
    }catch(error){
        console.log(error)
        res.status(404).send('Error en la obtención de la página')
    }
}

const controladorAcceso = async(req, res) =>{
    try{
        const paginaAcceso = await paginas.acceso()
        return res.status(200).sendFile(paginaAcceso)
    }catch(error){
        console.log(error)
        res.status(404).send('Error en la obtención de la página')
    }
}

export {controladorInicio,
    controladorRecuperarContra,
    controladorLogin,
    controladorAcceso,
    controladorCrearCuenta
}