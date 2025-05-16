import mongoose from "mongoose"
import { UserType } from "../../models/UserType.js"

export const userTypeDeleteController = async (req, res) => {
    const { id } = req.params;
    try {
        const userType = await UserType.findByIdAndDelete(id)

        if (!userType) return res.status(404).json({ error: "User type not found" })

        return res.status(200).json({ message: `User type deleted` })
    } catch (err) {
        return res.status(500).json({ error: 'Could not delete user type' || 'Something went wrong' })
    }
}