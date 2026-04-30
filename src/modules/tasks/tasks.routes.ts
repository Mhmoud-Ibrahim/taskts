import { Router } from "express";
import { addTask, deleteTask, getTask, gettasks, updateTask } from "./tasks.controller.js";

import { authenticate } from "../../middleware/authintecate.js";


const taskRouter =Router()

taskRouter
.post('/tasks',authenticate,addTask)
.get('/tasks',authenticate,gettasks)
.get('/task/:id',authenticate,getTask)
.delete('/tasks/:id',authenticate,deleteTask)
.put('/tasks/:id',authenticate,updateTask)


export default taskRouter