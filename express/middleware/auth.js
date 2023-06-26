const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token || token.replace('Bearer ', '') !== '123') {
        return res.status(401).end();
    }

    return next();
};

module.exports = authMiddleware;
