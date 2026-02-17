import { Router } from "express";
import { getMe, logout, signin, signup } from "./user.controller.js";
import { protect } from "../../middleware/auth.js";
const userRouter = Router();
userRouter
    .post('/signup', signup)
    .post('/signin', signin)
    .post('/logout', logout)
    .get('/me', protect, getMe);
export default userRouter;
//# sourceMappingURL=user.routes.js.map