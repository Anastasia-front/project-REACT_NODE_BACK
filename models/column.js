const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title for the column is required"],
    },
    board: {
      type: Schema.Types.ObjectId,
      required: [true, "Board assignment for the column is required"],
      ref: 'board'
    },
    taskOrder: {
      type: Array,
      default: []
    },
  },
  { versionKey: false, timestamps: true }
);

columnSchema.post("save", handleMongooseError);

const Column = model("column", columnSchema);

module.exports = Column;
