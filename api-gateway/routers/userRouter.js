import axios from "axios";
import dotenv from "dotenv"
import { Router } from "express";

dotenv.config()

const server = `${process.env.USER_SERVER}/users/`;

const errorMsg = { error: 'User Service failed' }

export const usersRouter = Router();

// Controller in /services/user-service/userGetAllController
usersRouter.get('/', async (req, res) => {
    try {
        const apiRes = await axios.get(server)
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        const resStatus = err.response.status || 500
        const resMsg = { error: err.response.data.error } || errorMsg
        res.status(resStatus).json(resMsg)
    }
})

// Controller in /services/user-service/userCreateController
usersRouter.post('/create', async (req, res) => {
    try {
        const apiRes = await axios.post(server + 'create', req.body)
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        const resStatus = err.response.status || 500
        const resMsg = { error: err.response.data.error} || errorMsg
        res.status(resStatus).json(resMsg)
    }
})

// Controller in /services/user-service/userGetOneController
usersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const apiRes = await axios.get(server + id)
        res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
        const resStatus = err.response.status || 500
        const resMsg = { error: err.response.data.error } || errorMsg
        res.status(resStatus).json(resMsg)
    }
})

// Controller in /services/user-service/userPatchController
usersRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const apiRes = await axios.patch(server + id, updateData)
        res.status(apiRes.status).json(apiRes.data);
    } catch (err) {
        const resStatus = err.response.status || 500
        const resMsg = { error: err.response.data.error } || errorMsg
        res.status(resStatus).json(resMsg)
    }
})

// Controller in /services/user-service/userDeleteController
usersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const apiRes = await axios.delete(server + id)
        res.status(200).json(apiRes.data)
    } catch (err) {
        const resStatus = err.response.status || 500
        const resMsg = { error: err.response.data.error } || errorMsg
        res.status(resStatus).json(resMsg)
    }
})