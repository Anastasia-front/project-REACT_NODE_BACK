const { User } = require('../../models');
const { authSchema } = require('../../schemas');
const { HttpError } = require('../../helpers');
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
    const { value, error } = authSchema.registerSchema.validate(req.body);
    if (error) {
        throw HttpError(400, `Missing or invalid required ${error.details[0].context.label} field`);
    }; 

    const { name, email, password } = value;
    const salt = await bcrypt.genSalt();
    const hachedPassword = await bcrypt.hash(password, salt);

    const result = await User.create({
        name,
        email,
        password: hachedPassword
    })

    res.status(201).json(result);
}
  
module.exports = register; 