import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {type : String, reqoired : true},
    email : { type : String, required : true, unique: true},
    password : { type : String, required : true},
    verifyOtp : { type : String, default: "" },
    resetOtp : { type : String, default: ""},
    verifyOtpExpireAt : { type : Number, default: 0 },
    resetOtpExpireAt : { type : Number, default: 0},
    isAccountVerified : { type : Boolean, default: false},
})

const userModel = mongoose.model.user || mongoose.model('user', userSchema)

export default userModel;