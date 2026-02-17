import { Router } from "express";
import { addTask, deleteTask, getTask, gettasks, updateTask } from "./tasks.controller.js";
import { validate } from "../../middleware/validate.js";
import { addTaskval } from "./task.validation.js";
import { authenticate } from "../../middleware/authintecate.js";
const taskRouter = Router();
taskRouter
    .post('/tasks', authenticate, validate(addTaskval), addTask)
    .get('/tasks', authenticate, gettasks)
    .get('/task/:id', getTask)
    .delete('/tasks/:id', authenticate, deleteTask)
    .put('/tasks/:id', authenticate, updateTask);
export default taskRouter;
//# sourceMappingURL=tasks.routes.js.map