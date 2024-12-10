import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config()
const app = express()
app.use(express.json())

app.use(cors())

app.use(morgan('dev'))

app.set('port', process.env.PORT || 3000)


app.get('/', (req, res) => {
    res.send("Servidor levantado")
})

export default app