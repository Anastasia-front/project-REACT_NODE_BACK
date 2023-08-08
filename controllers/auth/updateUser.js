const { User } = require("../../models");
const bcrypt = require("bcrypt");

const { authSchema } = require("../../schemas");
const { BadRequestError } = require("../../helpers");

const updateUser = async (req, res, next) => {
  const { user } = req;
  const { value, error } = authSchema.updateSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

  const { name, email, password, avatarURL } = value;

  if (password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        name,
        email,
        password: hashedPassword,
        avatarURL,
        accessToken: "",
      },
      { new: true, select: "name email theme avatarURL boards -_id" }
    );
    res.status(204).json();
  }

  if (email && !password) {
    await User.findByIdAndUpdate(
      { _id: user._id },
      {
        name,
        email,
        avatarURL,
        accessToken: "",
      },
      { new: true, select: "name email theme avatarURL boards -_id" }
    );
    res.status(204).json();
  }

  if (!password && !email) {
    const result = await User.findByIdAndUpdate({ _id: user._id }, req.body, {
      new: true,
      select: "name email theme avatarURL boards -_id",
    });
    res.json(result);
  }
};

module.exports = updateUser;
