const express = require("express");

const { ctrlAuth } = require("../../controllers");
const { isAuthorized, upload, uploadToCloud } = require("../../middlewares");

const routerAuth = express.Router();

routerAuth.post("/register", ctrlAuth.register);
routerAuth.post("/login", ctrlAuth.login);
routerAuth.get("/current", isAuthorized, ctrlAuth.currentUser);
routerAuth.put("/update", isAuthorized, ctrlAuth.updateUser);
routerAuth.patch("/theme", isAuthorized, ctrlAuth.changeTheme);
routerAuth.post("/logout", isAuthorized, ctrlAuth.logout);
routerAuth.patch(
  "/avatar",
  isAuthorized,
  upload.single("avatar"),
  uploadToCloud
);

module.exports = routerAuth;
