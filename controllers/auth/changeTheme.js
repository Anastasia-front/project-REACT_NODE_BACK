const { User } = require("../../models");
const { BadRequestError } = require("../../helpers");
const { authSchema } = require("../../schemas");

const changeTheme = async (req, res, next) => {
  const { user } = req;
  const { value, error } = authSchema.updateTheme.validate(req.body, {
    abortEarly: false,
  });

  BadRequestError(error);

  await User.findOneAndUpdate({ _id: user._id }, value);
  res.json({ message: "Theme changed" });
};

module.exports = changeTheme;
