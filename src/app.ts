import 'dotenv/config'
import express, { Application, json, urlencoded } from 'express'
import cors from 'cors'

const PORT : string | undefined = process.env.PORT || '8080'
const app: Application = express()
/** Middlewares */
app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))

const appServer = async () =>{
    await app.listen(PORT)
    console.log(`api corriendo en http://locahost:${PORT}`)
}

appServer()