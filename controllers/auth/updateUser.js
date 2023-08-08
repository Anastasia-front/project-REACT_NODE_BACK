const { User } = require("../../models");
const bcrypt = require("bcrypt");

const { authSchema } = require("../../schemas");
const { BadRequestError, uploadToCloud } = require("../../helpers");

const updateUser = async (req, res, next) => {
  const { _id, email: oldEmail, name: oldName } = req.user;
  const { value, error } = authSchema.updateSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) BadRequestError(error);

  const { name = oldName, email, password } = value;
  const updatedUser = {
    name,
  }

  if (req.file) {
    updatedUser.avatarURL = await uploadToCloud(req);
  }

  if (password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    updatedUser.password = hashedPassword;
    updatedUser.accessToken = '';
    res.status(204)
  }

  if (email && email !== oldEmail) {
    updatedUser.email = email;
    updatedUser.accessToken = '';
    res.status(204)
  }

  const result = await User.findByIdAndUpdate(_id, updatedUser, {
    new: true,
    select: "name email theme avatarURL boards -_id",
  });
  res.json(result);
};


module.exports = updateUser;
