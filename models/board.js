const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { array } = require('../constants')

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
      type: Schema.Types.ObjectId,
      ref: "background",
      default: null
    },
    columnOrder: {
      type: Array,
      default: []
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

boardSchema.post("save", handleMongooseError);

const Board = model("board", boardSchema);

module.exports = Board;