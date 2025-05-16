import mongoose from "mongoose"
import { User } from "../models/User.js"

export const userCreateController = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(201).json({ message: `User ${newUser.userName} saved` })
    } catch (err) {
        if (err.code === 11000 && err.keyPattern?.userName) {
            return res.status(409).json({ error: "Username is already taken" })
        }
        res.status(500).json({ error: 'Could not create user' })
    }

}