const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");

const register = async (req, res, next) => {
  const { value, error } = authSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });

  const { name, email, password } = value;

  if (error) BadRequestError(error);

  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw HttpError(409, "Email has already in use");
  }

  const result = await User.create({
    name,
    email,
    password,
  });

  res.status(201).json(result);
};

module.exports = register;
