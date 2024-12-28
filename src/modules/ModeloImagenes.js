import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Imagenes = (nomArchivo) =>{
    const imagenes = path.join(__dirname, '..', '..', 'public', 'IMAGENES', nomArchivo)
    return imagenes
}

export default Imagenes