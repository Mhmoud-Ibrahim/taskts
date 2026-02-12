import jwt, {} from 'jsonwebtoken';
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
        res.clearCookie('token');
        return res.status(401).send("توكن غير صالح");
    }
};
//# sourceMappingURL=auth.js.map