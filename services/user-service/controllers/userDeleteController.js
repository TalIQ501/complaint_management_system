import mongoose from "mongoose"
import { User } from "../models/User.js"

export const userDeleteController = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id)

        if (!user) return res.status(404).json({ error: "User not found" })

        return res.status(200).json({ message: `User deleted` })
    } catch (err) {
        res.status(500).json({ error: err || 'Something went wrong' })
    }
}