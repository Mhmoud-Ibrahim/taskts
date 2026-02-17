import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model.js';
import bcrypt from 'bcrypt';
import { catchError } from '../../middleware/catchError.js';
import { AppError } from '../../utils/appError.js';
//signup
const signup = catchError(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user)
        return res.status(400).json({ message: "user already exists" });
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashpassword;
    let newuser = new User(req.body);
    await newuser.save();
    res.json({ message: "success" });
});
//signin
const signin = catchError(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
        return next(new AppError('user not found', 401));
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
        let token = jwt.sign({ userId: user._id, email: user.email, name: user.name }, process.env.JWT_KEY);
        res.cookie('task_token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ message: "success" });
    }
    return next(new AppError('incorrect email or password ', 401));
});
const logout = catchError((req, res) => {
    res.clearCookie('task_token', {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
    });
    return res.json({ message: 'Logged out successfully' });
});
const getMe = catchError(async (req, res, next) => {
    const token = req.cookies.token || req.cookies;
    const userId = req.user?.userId || req.user?._id;
    if (!token)
        return next(new AppError("not authorized no token", 401));
    if (!req.cookies.token || !userId || req.cookies) {
        return next(new AppError("Unauthorized - Please login", 401));
    }
    res.status(200).json({
        status: "success",
        data: req.user, token
    });
});
export { signup, signin, logout, getMe };
//# sourceMappingURL=user.controller.js.map