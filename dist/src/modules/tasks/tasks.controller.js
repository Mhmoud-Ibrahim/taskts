import { Task } from "../../../database/models/tasks.model.js";
const addTask = async (req, res) => {
    const { title, description, completed } = req.body;
    const userId = req.user;
    const newTask = new Task({
        title,
        description,
        completed,
        user: userId,
    });
    await newTask.save();
    res.status(201).json({ message: "task added", newTask });
};
const gettasks = async (req, res) => {
    try {
        const userId = req.user;
        const tasks = await Task.find({ user: userId });
        if (!tasks || tasks.length === 0)
            return res.json({ message: "tasks not found" });
        if (req.session.isLoggedIn) {
            res.status(200).json({ message: "success", tasks });
        }
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
};
const deleteTask = async (req, res) => {
    const userId = req.user;
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId, user: userId });
    !task && res.status(404).json({ message: "task not found" });
    task && res.status(200).json({ message: "task deleted successfully" });
};
const updateTask = async (req, res) => {
    const userId = req.user;
    const taskId = req.params.id;
    const { title, description, completed } = req.body;
    let newTask = await Task.findOneAndUpdate({ _id: taskId, user: userId }, { title, description, completed }, { new: true });
    res.status(200).json({ message: "task updated successfully", newTask });
};
export { addTask, gettasks, deleteTask, updateTask, };
//# sourceMappingURL=tasks.controller.js.map