import Jwt from 'jsonwebtoken'
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model.js'
import bcrypt from 'bcrypt'
//signup

const signup = async(req:any,res:any)=>{
const {name,email,password} = req.body
if(!name || !email || !password) return res.json({message:"all fields are required"})
let user = new  User(req.body)
let passwordHass = bcrypt.hashSync(req.body.password,10)
user.password = passwordHass
await user.save()
!user &&res.status(404).json({message:"user not found"})
user &&res.json({message:"success"})
}
//signin
const signin = async(req:any,res:any)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user) return res.json({message:"user not found"})
    let isMatch = bcrypt.compareSync(password,user.password)
    if(!isMatch) return res.json({message:"invalid password"})
    let token = jwt.sign({userId:user._id},process.env.JWT_KEY as string,{expiresIn:'3h'})
    res.session.isLoggedIn = true,
    res.session.uerId = user._id,
    res.session.name = user.name,
    res.session.token = token
   return res.json({message:"success",token})
    
}




export  {
    signup,
    signin
}