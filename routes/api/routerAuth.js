const express = require("express");

const { ctrlWrapper } = require("../../decorators");
const { ctrlAuth } = require("../../controllers");
const { isAuthorized, upload, uploadToCloud } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlAuth.register);
routerAuth.post("/login", ctrlAuth.login);
routerAuth.get("/current", isAuthorized, ctrlAuth.currentUser);
routerAuth.patch("/update", isAuthorized, ctrlAuth.updateUser);
routerAuth.put("/theme", isAuthorized, ctrlAuth.changeTheme);
routerAuth.post("/logout", isAuthorized, ctrlAuth.logout);
routerAuth.post(
  "/avatar",
  isAuthorized,
  upload.single("avatar"),
  uploadToCloud
);

module.exports = routerAuth;
