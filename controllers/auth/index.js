const { ctrlWrapper } = require("../../decorators");

const register = require("./register");
const googleAuth = require("./googleAuth");
const googleRedirect = require("./googleRedirect")
const login = require("./login");
const currentUser = require("./currentUser");
const updateUser = require("./updateUser");
const changeTheme = require("./changeTheme");
const logout = require("./logout");

module.exports = {
  register: ctrlWrapper(register),
  googleAuth: ctrlWrapper(googleAuth),
  googleRedirect: ctrlWrapper(googleRedirect),
  login: ctrlWrapper(login),
  currentUser: ctrlWrapper(currentUser),
  updateUser: ctrlWrapper(updateUser),
  changeTheme: ctrlWrapper(changeTheme),
  logout: ctrlWrapper(logout),
};
