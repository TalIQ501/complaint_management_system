import axios from "axios";
import { Router } from "express";

export const authRouter = Router()

const server = 'http://localhost:5001/api/auth/'

authRouter.post('/login', async (req, res) => {
    try {
        const apiRes = await axios.post(server + 'login', req.body);
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})