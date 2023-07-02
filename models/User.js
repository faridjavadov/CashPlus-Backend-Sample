import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    otpCode:String,
    finCode: String,
    serialNumber: String,
    isConfirm: { type: Boolean, default: false }
},{
    versionKey:false
})

export const User = mongoose.model('User',UserSchema)