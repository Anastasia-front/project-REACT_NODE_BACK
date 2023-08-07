const { ctrlWrapper } = require("../../decorators");

const help = require("./help");

module.exports = ctrlWrapper(help);
