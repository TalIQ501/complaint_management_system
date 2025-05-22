import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ComplaintTimeTypeSchema = new Schema({
    timeToComplete: Number,
    trsTime: Date,
    created: Date,
    createdBy: mongoose.Schema.Types.ObjectId,
    updated: Date,
    updatedBy: mongoose.Schema.Types.ObjectId
})

//export const ComplaintTimeType = ('ComplaintTimeType', ComplaintTimeTypeSchema);