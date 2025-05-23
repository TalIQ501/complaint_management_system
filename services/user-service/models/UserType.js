import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserTypeSchema = new Schema({
    userType: String,
    userLevel: Number,
    trsTime: Date
})

export const UserType = mongoose.model('UserType', UserTypeSchema)