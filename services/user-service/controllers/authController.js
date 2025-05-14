import { User } from "../models/User.js"

export const authController = async (req, res) => {
    try {
        const { user_name, user_pwd } = req.body
        
        const user = User.findOne({ user_name })
        if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    
        return res.status(200).json({ message: "Login Successful" })
    } catch (err) {
        res.status(500).json({ error: "Controller error: " + err })
    }
}