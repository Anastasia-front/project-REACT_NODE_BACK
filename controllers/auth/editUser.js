const { User } = require('../../models');
const bcrypt = require('bcrypt');

const { authSchema } = require('../../schemas');
const { HttpError } = require('../../helpers');

const editUser = async (req, res, next) => {
    const { user } = req;
    const { value, error } = authSchema.editSchema.validate(req.body)
    if (error) {
        throw HttpError(400, `Invalid ${error.details[0].context.label} field`);
    }; 

    const { name, email, password, theme } = value;

    if (password) { 
        const salt = await bcrypt.genSalt();
        const hachedPassword = await bcrypt.hash(password, salt);

        await User.findByIdAndUpdate(
            { _id: user._id },
            {
                name,
                email,
                password: hachedPassword,
                theme,
                accessToken: '',
            },
            { new: true, select: 'name email theme avatarURL boards -_id' });
        res.status(204).json()
    };

    if (email && !password) {
        await User.findByIdAndUpdate(
            { _id: user._id },
            {
                name,
                email,
                theme,
                accessToken: '',
            },
            { new: true, select: 'name email theme avatarURL boards -_id' });
        res.status(204).json()
    }
    
    if (!password && !email) {
        const result = await User.findByIdAndUpdate({ _id: user._id }, req.body, { new: true, select: 'name email theme avatarURL boards -_id' });
        res.json(result);
    }
};

module.exports = editUser;