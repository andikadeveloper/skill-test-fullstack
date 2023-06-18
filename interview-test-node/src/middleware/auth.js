const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const whitelistUrl = process.env.JWT_WHITELIST_URL

    if (whitelistUrl.includes(req.path)) {
        return next();
    }

    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.status(401).json({
            status: 'fail',
            message: 'Unauthorized'
        });
    }

    try {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        const decoded = jwt.verify(bearerToken, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    return next();
};

module.exports = verifyToken;