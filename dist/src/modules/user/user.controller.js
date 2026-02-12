import Jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model.js';
import bcrypt from 'bcrypt';
//signup
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.json({ message: "all fields are required" });
    let user = new User(req.body);
    let passwordHass = bcrypt.hashSync(req.body.password, 10);
    user.password = passwordHass;
    await user.save();
    !user && res.status(404).json({ message: "user not found" });
    user && res.json({ message: "success" });
};
//signin
const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
        return res.json({ message: "user not found" });
    let isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch)
        return res.json({ message: "invalid password" });
    let token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '3h' });
    if (token)
        res.cookie('token', token, {
            httpOnly: true, // لا يمكن الوصول له عبر JavaScript (حماية من XSS)
            secure: true, // يعمل فقط مع HTTPS (Vercel توفر هذا تلقائياً)
            sameSite: 'none', // ضروري إذا كان الفرونت والباك على دومين مختلف
            maxAge: 3600000 // مدة الصلاحية ساعة واحدة
        });
    return res.json({ message: "success", token });
};
export { signup, signin };
//# sourceMappingURL=user.controller.js.map