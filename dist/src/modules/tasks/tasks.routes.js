import { Router } from "express";
import { addTask, deleteTask, getTask, gettasks, updateTask } from "./tasks.controller.js";
import { validate } from "../../middleware/validate.js";
import { addTaskval } from "./task.validation.js";
import { protect } from "../../middleware/auth.js";
const taskRouter = Router();
taskRouter
    .post('/tasks', protect, validate(addTaskval), addTask)
    .get('/tasks', protect, gettasks)
    .get('/task/:id', getTask)
    .delete('/tasks/:id', protect, deleteTask)
    .put('/tasks/:id', protect, updateTask);
export default taskRouter;
//# sourceMappingURL=tasks.routes.js.map