import 'dotenv/config'
import express, { Application, json, Response, urlencoded } from 'express'
import cors from 'cors'

const PORT : string | undefined = process.env.PORT || '8080'
const app: Application = express()
/** Middlewares */
app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.get('/', (_, res: Response) => {
    res.status(200).json({message: 'Api-rest'})
})
const appServer = async () =>{
    await app.listen(PORT)
    console.log(`api corriendo en http://localhost:${PORT}`)
}

appServer()