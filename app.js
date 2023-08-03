const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// const routerAuth = require("./routes/api");
// const routerBoards = require("./routes/api");
// const routerColumns = require("./routes/api");
// const routerTasks = require("./routes/api");
const routerHelp = require("./routes/api/routerHelp");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/api/users", routerAuth);
// app.use("/api/boards", routerBoards);
// app.use("/api/columns", routerColumns);
// app.use("/api/tasks", routerTasks);
app.use("/api/help", routerHelp);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
