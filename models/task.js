const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const taskSchema = new Schema(
  {
    //
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = Task;
