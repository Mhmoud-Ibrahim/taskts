// import mongoose from "mongoose";
// const Schema = new mongoose.Schema({
//    name:{
//     type:String,
//     required:true
//    },
//     email:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true
//     }
// },{timestamps:true,
// })
// export const User = mongoose.model('User',Schema)       
import mongoose, { Document, Schema, model } from "mongoose";
// 2. تعريف الـ Schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // سيتم تخزينها مشفرة جاهزة
    userImage: { type: String },
    googleId: { type: String, required: false },
    otpCode: { type: String },
    otpExpire: Date,
    role: {
        type: String,
        enum: ['user', 'admin', 'employee'],
        default: 'user'
    },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
}, {
    timestamps: true,
    versionKey: false
});
// ملاحظة: تم حذف الـ pre-save لأن التشفير يتم يدوياً في الكنترولر لضمان استقرار TypeScript
export const User = model('User', UserSchema);
//# sourceMappingURL=user.model.js.map