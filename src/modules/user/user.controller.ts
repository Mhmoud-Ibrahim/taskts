
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model.js'
import bcrypt from 'bcrypt'
import { catchError } from '../../middleware/catchError.js';
import { AppError } from '../../utils/appError.js';

//signup
const signup = catchError(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).json({ message: "user already exists" })
    const hashpassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashpassword
        let newuser = new User(req.body)
    await newuser.save()
    res.json({ message: "success" })
})

//signin
const signin = catchError(async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return next(new AppError('user not found', 401))
    const isPasswordCorrect =await bcrypt.compare(password,user.password);
    if (isPasswordCorrect) {
        let token = jwt.sign({userId: user._id, email: user.email, name: user.name }, process.env.JWT_KEY as string)
        res.cookie('access_token', token, {
            httpOnly: true,   
            secure:process.env.MODE === "production",     
            sameSite: "strict", 
            maxAge: 3600000    
        })
        return res.status(200).json({ message: "success",token });
    }
    return next(new AppError('incorrect email or password ', 401))
})





const logout = catchError((req: any, res: any) => {
    res.clearCookie('access_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    return res.json({ message: 'Logged out successfully' })
})


const getMe = catchError(async (req: any, res: any, next: any) => {
   const userId = req.user?.userId || req.user?._id;
   if (!req.user || !userId) {
       return next(new AppError("Unauthorized - Please login", 401));
    }
    const user = await User.findById(userId);
    res.status(200).json({
        status: "success",
        data:req.user
    });
});





export {
    signup,
    signin,
    logout,
    getMe
}