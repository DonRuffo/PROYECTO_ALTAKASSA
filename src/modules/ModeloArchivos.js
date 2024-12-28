import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paginas={
    async inicio(){
        const paginaInicio = path.join(__dirname, '..', '..', 'public', 'Principal.html')
        return paginaInicio
    },
    async login(){
        const paginaLogin = path.join(__dirname, '..', '..', 'public', 'login.html')
        return paginaLogin
    },
    async crearCuenta(){
        const paginaCrearCuenta = path.join(__dirname, '..', '..', 'public', 'crearcuenta.html')
        return paginaCrearCuenta
    },
    async recuperarContra(){
        const paginaRecuperar = path.join(__dirname, '..', '..', 'public', 'recuperarcontra.html')
        return paginaRecuperar
    },
    async acceso(){
        const paginaAcceso = path.join(__dirname, '..', '..', 'public', 'acceso.html')
        return paginaAcceso
    }
}


export default paginas