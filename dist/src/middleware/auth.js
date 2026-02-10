import jwt, {} from 'jsonwebtoken';
import { log } from 'node:console';
export const auth = (req, res, next) => {
    try {
        let { token } = req.headers;
        if (!token)
            return res.status(401).json({ message: 'no token provided.' });
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        ;
        req.user = decoded.userId;
        return next();
    }
    catch (error) {
        res.status(401).send({ error: 'Invalid Token' });
    }
};
//# sourceMappingURL=auth.js.map