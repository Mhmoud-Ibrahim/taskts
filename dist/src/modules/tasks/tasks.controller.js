import { Tasks } from "../../../database/models/tasks.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";
const addTask = catchError(async (req, res) => {
    const { title, description, completed } = req.body;
    const task = await Tasks.findOne({ title });
    if (task)
        return res.status(400).json({ message: "task already exists" });
    const newTask = new Tasks({
        title,
        description,
        completed,
        user: req.user
    });
    await newTask.save();
    res.status(201).json({ message: "success", newTask });
});
const gettasks = catchError(async (req, res, next) => {
    const userId = req.headers.id;
    const tasks = await Tasks.find({ user: userId });
    if (!tasks)
        return next(new AppError('tasks not found', 404));
    res.json({ message: "success", tasks });
});
const getTask = catchError(async (req, res, next) => {
    const taskId = req.params.id;
    const task = await Tasks.findById({ _id: taskId });
    !task && next(new AppError("task not found", 404));
    res.json({ message: "success", task });
});
const deleteTask = catchError(async (req, res, next) => {
    const userId = req.headers.userId;
    const taskId = req.params.id;
    const task = await Tasks.findByIdAndDelete({ _id: taskId, user: userId });
    !task && next(new AppError('task not found', 404));
    task && res.status(200).json({ message: "task deleted successfully" });
});
const updateTask = catchError(async (req, res) => {
    const userId = req.headers.userId;
    const taskId = req.params.id;
    const { title, description, completed } = req.body;
    let newTask = await Tasks.findByIdAndUpdate({ _id: taskId, user: userId }, { title, description, completed }, { new: true });
    res.status(200).json({ message: "task updated successfully", newTask });
});
export { addTask, gettasks, deleteTask, updateTask, getTask };
//# sourceMappingURL=tasks.controller.js.map