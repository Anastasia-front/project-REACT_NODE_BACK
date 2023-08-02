const express = require("express");

const { ctrlWrapper } = require('../../decorators')
const { ctrlAuth } = require("../../controllers");

const routerAuth = express.Router();

routerAuth.post('/register', ctrlWrapper(ctrlAuth.register))
routerAuth.get('/login', ctrlWrapper(ctrlAuth.login))
routerAuth.patch('/edit', ctrlWrapper(ctrlAuth.editUser))
routerAuth.get('/logout', ctrlWrapper(ctrlAuth.logout))

module.exports = routerAuth;
