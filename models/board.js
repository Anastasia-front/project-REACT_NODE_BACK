const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { array } = require("../constants");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title for the board is required"],
    },
    icon: {
      type: String,
      enum: array.icons,
      default: array.icons[0],
    },
    background: {
      type: String,
      enum: array.backgrounds,
      default: array.backgrounds[0],
    },
    columnOrder: {
      type: Array,
      default: [],
    },
    owners: [{
      type: Schema.Types.ObjectId,
      ref: "user",
    }],
  },
  { versionKey: false, timestamps: true }
);

boardSchema.post("save", handleMongooseError);

const Board = model("board", boardSchema);

module.exports = Board;
