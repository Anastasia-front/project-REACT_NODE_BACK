const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signToken = function () {
  const payload = { id: this._id };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
};

module.exports = signToken;
