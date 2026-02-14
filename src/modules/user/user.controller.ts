
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model.js'
import bcrypt from 'bcrypt'
import { catchError } from '../../middleware/catchError.js';
import { AppError } from '../../utils/appError.js';

//signup
const signup =catchError(async(req,res)=>{
let user = new  User(req.body)
await user.save()
res.json({message:"success"})
})

//signin
const signin = catchError(async(req,res,next)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && bcrypt.compareSync(password,user.password)){
        let token = jwt.sign({userId:user._id},process.env.JWT_KEY as string)
        return res.json({message:"success",token})
    }
    next(new AppError('incorrect email or password ',401))
}
    
  )




//signup

// const signup =catchError( async(req:any,res:any,next)=>{
// const {name,email,password} = req.body
// if(!name || !email || !password)
//     return next(new AppError('all fields are required',400))
// let user = new  User(req.body)
// let passwordHass = bcrypt.hashSync(req.body.password,10)
// user.password = passwordHass
// await user.save()
// user &&res.json({message:"success"})
// })

// //signin
// const signin = catchError( async(req:any,res:any,next)=>{
//     const {email,password} = req.body
//     const user = await User.findOne({email})

//     if(!user ) return next(new AppError('user not found',401))
//         let isMatch =  bcrypt.compareSync(req.body.password,user.password)
//     if(!isMatch) return next(new AppError('wrong password',401))
//     let token = jwt.sign({userId:user._id,},process.env.JWT_KEY as string,{expiresIn:"1d"})
//     req.session.user = {
//     userId: user._id, 
//     isLoggedIn:true,
//     email:user.email,
//     name:user.name,
//     token
//     };
//    return res.json({message:"success",session:req.session})
    
// })






export  {
    signup,
    signin
}