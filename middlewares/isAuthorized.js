const jwt = require('jsonwebtoken');
const { HttpError } = require('../helpers');
const { User } = require('../models');

const { SECRET_KEY } = process.env;

const isAuthorized = async (req, res, next) => {
    try {
        const [_, token] = (req.headers.authorization || '').split(' ');
        const isValidToken = jwt.verify(token, SECRET_KEY);
        
        const user = await User.findOne({ _id: isValidToken.id });
        if (!user || token !== user.accessToken || !user.accessToken) throw HttpError(401);
        
        req.user = user;
        next();
    } catch (error) {
        if (error.message === 'invalid signature' || error.message === 'jwt expired' || error.message === 'jwt must be provided') {
            error.status = 401;
            error.message = 'Unauthorized';
        };
        next(HttpError(401));;
    };
};

module.exports = isAuthorized;