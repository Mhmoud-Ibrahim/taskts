import { Router } from "express";
import { addTask, deleteTask, gettasks, updateTask } from "./tasks.controller.js";
import auth from "../../middleware/auth.js";
const taskRouter = Router();
taskRouter
    .post('/tasks', auth, addTask)
    .get('/tasks', auth, gettasks)
    .delete('/tasks/:id', auth, deleteTask)
    .put('/tasks/:id', auth, updateTask);
export default taskRouter;
//# sourceMappingURL=tasks.routes.js.map