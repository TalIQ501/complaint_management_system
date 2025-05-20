import { Company } from '../models/Company.js'

export const registerCompanyController = async (req, res) => {
    try {
        const newCompany = new Company(req.body);
        await newCompany.save()
        return res.status(201).json({ message: `Company ${newCompany.companyName} registered` })
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' })
    }
}