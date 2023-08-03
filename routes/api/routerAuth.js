const express = require("express");

const { ctrlWrapper } = require('../../decorators');
const { ctrlAuth } = require("../../controllers");
const { isAuthorized } = require('../../middlewares');

const routerAuth = express.Router();

routerAuth.post('/register', ctrlWrapper(ctrlAuth.register));
routerAuth.get('/login', ctrlWrapper(ctrlAuth.login));
routerAuth.patch('/update', isAuthorized, ctrlWrapper(ctrlAuth.updateUser));
routerAuth.patch('/theme', isAuthorized, ctrlWrapper(ctrlAuth.changeTheme))
routerAuth.get('/logout', isAuthorized, ctrlWrapper(ctrlAuth.logout));

module.exports = routerAuth;
