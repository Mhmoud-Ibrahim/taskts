import { Router } from "express";
import { getMe, home, logout, signin, signup } from "./user.controller.js";
import { authenticate } from "../../middleware/authintecate.js";
const userRouter = Router();
userRouter
    .post('/signup', signup)
    .post('/signin', signin)
    .post('/logout', logout)
    .get('/me', authenticate, getMe)
    .get('/', home);
export default userRouter;
//# sourceMappingURL=user.routes.js.map