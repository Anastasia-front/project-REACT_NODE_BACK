const { User } = require("../../models");

const { authSchema } = require("../../schemas");
const {
  BadRequestError,
  uploadToCloud,
  hashedPassword,
} = require("../../helpers");

const updateUser = async (req, res, next) => {
  const { _id, email: oldEmail, name: oldName } = req.user;
  const { value, error } = authSchema.updateSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

  const { name = oldName, email, password } = value;
  const updatedUser = {
    name,
  };

  if (req.file) {
    updatedUser.avatarURL = await uploadToCloud(req);
  }

  if (password) {
    updatedUser.password = await hashedPassword(password);
    updatedUser.accessToken = "";
    res.status(204).json();
  }

  if (email && email !== oldEmail) {
    updatedUser.email = email;
    updatedUser.accessToken = "";
    res.status(204).json();
  }

  const result = await User.findByIdAndUpdate(_id, updatedUser, {
    new: true,
    select: "name email theme avatarURL -_id",
  });
  res.json(result);
};

module.exports = updateUser;
