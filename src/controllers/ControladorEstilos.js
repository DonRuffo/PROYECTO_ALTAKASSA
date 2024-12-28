import Estilos from "../modules/ModeloEstilos.js";

const controladorEstilos = (req, res) =>{
    try{
        const {archivo} = req.params
        const EstilosPaginas = Estilos(archivo)
        return res.status(200).sendFile(EstilosPaginas)
    }catch(error){
        console.log(error)
        res.status(404)
    }
}

export default controladorEstilos