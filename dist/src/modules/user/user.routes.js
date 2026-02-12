import { Router } from "express";
import { senduser, signin, signup } from "./user.controller.js";
const userRouter = Router();
userRouter
    .post('/signup', signup)
    .post('/signin', signin)
    .get('/me', senduser);
export default userRouter;
//# sourceMappingURL=user.routes.js.map