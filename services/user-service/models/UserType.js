import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserTypeSchema = new Schema({
    user_type: String,
    trs_time: Date,
})