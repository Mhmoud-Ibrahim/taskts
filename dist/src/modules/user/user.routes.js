import { Router } from "express";
import { getMe, logout, signin, signup } from "./user.controller.js";
import { authenticate } from "../../middleware/authintecate.js";
const userRouter = Router();
userRouter
    .post('/signup', signup)
    .post('/signin', signin)
    .post('/logout', logout)
    .get('/me', authenticate, getMe);
export default userRouter;
//# sourceMappingURL=user.routes.js.map