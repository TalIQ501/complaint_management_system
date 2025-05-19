import { Router } from "express";
import proxy from "express-http-proxy";
import { config as dotenvConfig } from "dotenv";

dotenvConfig()

export const serviceRouter = Router();

const createProxy = (target) => {
    return proxy(target, {
        proxyReqPathResolver: req => {
            const path = req.originalUrl.slice(4)
            return path
        }
    })
}

serviceRouter.use('/auth/', createProxy(process.env.USER_SERVER))
serviceRouter.use('/users/', createProxy(process.env.USER_SERVER))
serviceRouter.use('/usertype/', createProxy(process.env.USER_SERVER))
serviceRouter.use('/companies/', createProxy(process.env.COMPANY_SERVER))
