import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { router } from "./routers/router.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(morgan("combined"))
app.use('/api/companies', router)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
             console.log('User service active on ' + PORT)
        })
    })
    .catch(e => console.log('Failed to connect: ' + e))