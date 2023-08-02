const express = require("express");

const { ctrlWrapper } = require('../../decorators')
const { ctrlAuth } = require("../../controllers");
const { isAutorized } = require('../../middlewares')

const routerAuth = express.Router();

routerAuth.post('/register', ctrlWrapper(ctrlAuth.register))
routerAuth.get('/login', ctrlWrapper(ctrlAuth.login))
routerAuth.patch('/edit', isAutorized, ctrlWrapper(ctrlAuth.editUser))
routerAuth.get('/logout', isAutorized, ctrlWrapper(ctrlAuth.logout))

module.exports = routerAuth;
