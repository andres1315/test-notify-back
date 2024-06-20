import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { initSocket } from './socket/socket.js'
import { getRoutes } from './routes/routes.js'

const app = express()
app.disable('x-powered-by') // Disable header x-powered-by: Express
// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json({ limit: '50mb' }))


const {serverHttp,socket} = initSocket(app)
app.set('socket',socket)

getRoutes(app)
export default serverHttp