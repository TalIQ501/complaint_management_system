import mongoose from "mongoose"
import { User } from "../models/User.js"

export const userCreateController = async (req, res) => {
    try {
        console.log(req.body)
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(201).json({ message: `User ${req.body.user_name} saved` })
    } catch (e) {
        res.status(500).json({ error: "Controller error" + e })
    }

}