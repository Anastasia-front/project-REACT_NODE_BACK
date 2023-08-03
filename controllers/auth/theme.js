const { User } = require('../../models');
const { HttpError } = require('../../helpers');
const { authSchema } = require('../../schemas');

const theme = async (req, res, next) => {
    const { user } = req;
    const { value, error } = authSchema.updateTheme.validate(req.body);
    if (error) throw HttpError(400, error.details[0].message);

    await User.findOneAndUpdate({ _id: user._id }, value);
    res.json({message: 'Theme changed'});
};

module.exports = theme;