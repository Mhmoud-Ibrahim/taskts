import { Router } from "express";
import { addTask, deleteTask, getTask, gettasks, updateTask } from "./tasks.controller.js";
import { validate } from "../../middleware/validate.js";
import { addTaskval } from "./task.validation.js";
import { protectedRoute } from "../../middleware/protectedRoute.js";
const taskRouter = Router();
taskRouter
    .post('/tasks', protectedRoute, validate(addTaskval), addTask)
    .get('/tasks', gettasks)
    .get('/task/:id', getTask)
    .delete('/tasks/:id', deleteTask)
    .put('/tasks/:id', updateTask);
export default taskRouter;
//# sourceMappingURL=tasks.routes.js.map