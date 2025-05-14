import axios from "axios";
import { Router } from "express";

const server = 'http://localhost:5001/api/users/';

export const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    try {
        const apiRes = await axios.get(server)
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

usersRouter.post('/create', async (req, res) => {
    try {
        const apiRes = await axios.post(server + 'create', req.body)
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})