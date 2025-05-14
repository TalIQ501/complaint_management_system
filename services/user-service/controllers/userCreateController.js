import mongoose from "mongoose"
import { User } from "../models/User.js"

export const userCreateController = async (req, res) => {
    try {
        console.log(req.body)
        const newUser = new User(req.body)
        const userExist = await User.findOne({ $or: 
            [
                { userName: req.body.userName }, 
                { userEmail: req.body.userEmail }
            ]
        })
        if (userExist !== null) return res.status(409).json({ message: "Credentials already exist" })
        await newUser.save()
        return res.status(201).json({ message: `User ${newUser.userName} saved` })
    } catch (e) {
        res.status(500).json({ error: + e })
    }

}