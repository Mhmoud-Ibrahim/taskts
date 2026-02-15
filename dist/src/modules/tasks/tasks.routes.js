import { Router } from "express";
import { addTask, deleteTask, gettasks, updateTask } from "./tasks.controller.js";
import { validate } from "../../middleware/validate.js";
import { addTaskval } from "./task.validation.js";
import { protectedRoute } from "../../middleware/protectedRoute.js";
const taskRouter = Router();
taskRouter
    .post('/tasks', protectedRoute, validate(addTaskval), addTask)
    .get('/tasks', gettasks)
    .delete('/tasks/:id', protectedRoute, deleteTask)
    .put('/tasks/:id', protectedRoute, updateTask);
export default taskRouter;
//# sourceMappingURL=tasks.routes.js.map