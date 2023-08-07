const express = require("express");

const { ctrlAuth } = require("../../controllers");
const { isAuthorized } = require("../../middlewares");

const { upload } = require("../../middlewares");
const { uploadToCloud } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlAuth.register);
routerAuth.post("/login", ctrlAuth.login);
routerAuth.get("/current", isAuthorized, ctrlAuth.currentUser);
routerAuth.patch("/update", isAuthorized, ctrlAuth.updateUser);
routerAuth.patch("/theme", isAuthorized, ctrlAuth.changeTheme);
routerAuth.post("/logout", isAuthorized, ctrlAuth.logout);
routerAuth.post(
  "/uploadimage",
  isAuthorized,
  upload.single("image"),
  uploadToCloud
);

module.exports = routerAuth;
