const { User } = require("../../models");
const { authSchema } = require("../../schemas");
const { HttpError, BadRequestError } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { value, error } = authSchema.loginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

  const { email, password } = value;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email is wrong");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw HttpError(401, "Password is wrong");

  const accessToken = jwt.sign({ id: user._id }, SECRET_KEY, {
    expiresIn: "30d",
  });
  await User.findOneAndUpdate({ email }, { accessToken });
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
