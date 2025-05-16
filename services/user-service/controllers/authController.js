import mongoose from "mongoose";
import { User } from "../models/User.js";

export const authController = async (req, res) => {
    try {
        const user = await User.findOne(
            { userName: req.body.userName, userPwd: req.body.userPwd }
        )

        if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    
        return res.status(200).json({ message: "Login Successful" })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}