import mongoose from "mongoose";
import { ComplaintTimeTypeSchema } from "./ComplaintTimeType.js";

const Schema = mongoose.Schema;

export const ComplaintTypeSchema = new Schema({
    complaintType: {
        type: String,
        required: true
    },
    trsTime: Date,
    complaintTime: ComplaintTimeTypeSchema
})

//export const ComplaintType = ('ComplaintType', ComplaintTypeSchema);