import axios from "axios";
import { Router } from "express";

export const authRouter = Router()

const errorMsg = { error: 'Auth service failed' }

const server = 'http://localhost:5001/api/auth/'

// Controller in /services/user-service/authController
authRouter.post('/login', async (req, res) => {
    try {
        const apiRes = await axios.post(server + 'login', req.body);
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        const resStatus = err.response.status || 500
        const resMsg = { error: err.response.data.error } || errorMsg
        res.status(resStatus).json(resMsg)
    }
})