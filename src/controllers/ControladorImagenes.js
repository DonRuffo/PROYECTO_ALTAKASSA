import Imagenes from "../modules/ModeloImagenes.js";

const controladorImagenes = async(req, res) =>{
    try{
        const {archivo} = await req.params
        const imagenesCon = Imagenes(archivo)
        return res.status(200).sendFile(imagenesCon)
    }catch(error){
        console.log(error)
        res.status(404)
    }
}

export default controladorImagenes