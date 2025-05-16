import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName : {
        type: String,
        unique: true
    },
    userPwd: String,
    userStatus: String,
    userCell: String,
    userExt: String,
    trsTime: Date,
    companyId: mongoose.Schema.Types.ObjectId,
    userTypeId: mongoose.Schema.Types.ObjectId,
    createdBy: mongoose.Schema.Types.ObjectId,
    createdDate: Date,
    updatedBy: mongoose.Schema.Types.ObjectId,
    updatedDate: Date,
    offAlloId: mongoose.Schema.Types.ObjectId,
    complaintCategoryId: mongoose.Schema.Types.ObjectId
})

export const User = mongoose.model('User', UserSchema)