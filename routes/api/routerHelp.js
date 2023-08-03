const express = require("express");

const { ctrlHelp } = require("../../controllers");

const routerHelp = express.Router();

routerHelp.post("/", ctrlHelp);

module.exports = routerHelp;
