import { getMe, logout, signin, signup } from "./user.controller.js";
import { authenticate } from "../../middleware/authintecate.js";
import { Router } from 'express';
import passport from 'passport';
import * as authController from './user.controller.js';
const userRouter = Router();
userRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
userRouter.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: 'https://vercel.app' }), authController.googleAuthSuccess);
userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.post('/logout', logout);
userRouter.get('/me', authenticate, getMe);
// --- Forgot & Reset Password Routes ---
userRouter.post('/forgotPassword', authController.forgotPassword); // لإرسال الإيميل
userRouter.patch('/resetPassword', authController.resetPassword); // لتغيير الباسورد الفعلي
export default userRouter;
//# sourceMappingURL=user.routes.js.map