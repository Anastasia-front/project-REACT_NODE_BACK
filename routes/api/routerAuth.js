const express = require("express");

const { ctrlAuth } = require("../../controllers");
const { isAuthorized } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlAuth.register);
routerAuth.post("/login", ctrlAuth.login);
routerAuth.get("/current", isAuthorized, ctrlAuth.currentUser);
routerAuth.patch("/update", isAuthorized, ctrlAuth.updateUser);
routerAuth.put("/theme", isAuthorized, ctrlAuth.changeTheme);
routerAuth.post("/logout", isAuthorized, ctrlAuth.logout);

module.exports = routerAuth;
