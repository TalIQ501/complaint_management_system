import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv"
import { serviceRouter } from "./routers/serviceRouter.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(morgan("combined"))
app.disable("x-powered-by")

app.use('/api', serviceRouter)

app.listen(PORT, () => {
    console.log("API Gateway running on Port " + PORT)
})