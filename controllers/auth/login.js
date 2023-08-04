const { User } = require('../../models');
const { authSchema } = require('../../schemas');
const { HttpError } = require('../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
    const { value, error } = authSchema.loginSchema.validate(req.body);
    if (error) throw HttpError(400, error.details[0].message);

    const { email, password } = value;
    const user = await User.findOne({ email });
    if (!user) throw HttpError(401, 'Email is wrong');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw HttpError(401, 'Password is wrong');

    const accessToken = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '30m' });
    await User.findOneAndUpdate({email}, {accessToken});
    res.json({
        accessToken: accessToken,
        user: {
            name: user.name,
            email: user.email,
            theme: user.theme,
            avatarURL: user.avatarURL,
            boards: user.boards,
        },
    });
};

module.exports = login;