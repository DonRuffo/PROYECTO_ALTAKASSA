import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Estilos = (nomArchivo) =>{
    const paginaEstilos = path.join(__dirname, '..', '..', 'public', 'ESTILO', nomArchivo)
    return paginaEstilos
}

export default Estilos