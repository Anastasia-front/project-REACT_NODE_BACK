const express = require("express");

const { ctrlWrapper } = require("../../decorators");
const { ctrlAuth } = require("../../controllers");
const { isAuthorized, upload, uploadToCloud } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlWrapper(ctrlAuth.register));
routerAuth.post("/login", ctrlWrapper(ctrlAuth.login));
routerAuth.get("/current", isAuthorized, ctrlWrapper(ctrlAuth.currentUser));
routerAuth.patch("/update", isAuthorized, ctrlWrapper(ctrlAuth.updateUser));
routerAuth.patch("/theme", isAuthorized, ctrlWrapper(ctrlAuth.changeTheme));
routerAuth.post("/logout", isAuthorized, ctrlWrapper(ctrlAuth.logout));
routerAuth.post(
  "/avatar",
  isAuthorized,
  upload.single("avatar"),
  uploadToCloud
);

module.exports = routerAuth;
