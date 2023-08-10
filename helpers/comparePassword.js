const bcrypt = require("bcrypt");

const comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = comparePassword;
