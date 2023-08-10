const currentUser = async (req, res, next) => {
  const { _id, name, email, theme, avatarURL } = req.user;
  res.json({ _id, name, email, theme, avatarURL });
};

module.exports = currentUser;
