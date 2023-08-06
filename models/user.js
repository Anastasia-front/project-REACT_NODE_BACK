const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { array } = require("../constants");
const { themes } = array;

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "User",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    theme: {
      type: String,
      enum: [...themes],
      default: `${themes[1]}`,
    },
    avatarURL: {
      type: String,
      default: "",
    },
    boards: {
      type: Array,
      default: [],
    },
    accessToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
