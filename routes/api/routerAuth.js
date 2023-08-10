const express = require("express");

const { ctrlAuth, ctrlHelp } = require("../../controllers");
const { isAuthorized, upload } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlAuth.register);
routerAuth.post("/login", ctrlAuth.login);
routerAuth.get("/current", isAuthorized, ctrlAuth.currentUser);
routerAuth.put(
  "/update",
  isAuthorized,
  upload.single("avatar"),
  ctrlAuth.updateUser
);
routerAuth.patch("/theme", isAuthorized, ctrlAuth.changeTheme);
routerAuth.post("/logout", isAuthorized, ctrlAuth.logout);
routerAuth.post("/help", isAuthorized, ctrlHelp);

module.exports = routerAuth;
