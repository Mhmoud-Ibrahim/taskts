import { abort } from "node:process";
import { AppError } from "../utils/appError.js";
export const validate = (schema) => {
    return (req, res, next) => {
        let { error } = schema.validate(req.body, { abortEarly: false });
        if (!error) {
            next();
        }
        else {
            let errMsg = error.details.map((err) => err.message);
            next(new AppError(errMsg, 400));
        }
    };
};
//# sourceMappingURL=validate.js.map