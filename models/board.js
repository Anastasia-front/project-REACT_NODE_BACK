const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title for the board is required"],
    },
    icon: {
      type: String,
      enum: [
        'icon-colors',
        'icon-container',
        'icon-hexagon',
        'icon-lightning',
        'icon-loading',
        'icon-project',
        'icon-star',
        'icon-puzzle-piece',
      ],
      default: 'icon-project',
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