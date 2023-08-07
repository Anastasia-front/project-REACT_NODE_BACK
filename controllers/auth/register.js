const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  const { value, error } = authSchema.registerSchema.validate(req.body, {
    abortEarly: false,
  });

  const { name, email, password } = value;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  if (error) {
    BadRequestError(error);
  }

  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw HttpError(409, "Email has already in use");
  }

  const result = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json(result);
};

module.exports = register;
