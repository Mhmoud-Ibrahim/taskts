import Joi from "joi";
const addTaskval = Joi.object({
    title: Joi.string().min(3).max(200).required().trim(),
    description: Joi.string().min(0).max(5000),
    completed: Joi.boolean()
});
export { addTaskval };
//# sourceMappingURL=task.validation.js.map