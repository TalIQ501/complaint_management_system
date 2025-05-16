import mongoose from "mongoose"
import { User } from "../../models/User.js"

export const userGetAllController = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (e) {
        res.status(500).json({ error: + e })
    }
}