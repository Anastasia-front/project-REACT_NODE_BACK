const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const { array, regExp } = require('../constants')

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title for the task is required"],
    },
    description: {
      type: String,
      required: [true, "Description for the task is required"],
    },
    priority: {
      type: String,
      enum: array.priorities,
      default: array.priorities[0],
    },
    deadline: {
      type: String,
      match: regExp.deadline,
      default: null,
    },
    column: {
      type: Schema.Types.ObjectId,
      required: [true, "Column assignment for the task is required"],
      ref: 'column,'
    }
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = Task;
