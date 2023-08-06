const express = require("express");

const { isAuthorized } = require("../../middlewares");
const { ctrlHelp } = require("../../controllers");

const routerHelp = express.Router();

routerHelp.post("/", isAuthorized, ctrlHelp);

module.exports = routerHelp;
