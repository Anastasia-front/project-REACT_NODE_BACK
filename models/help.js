// const { Schema, model } = require("mongoose");
// const { handleMongooseError } = require("../helpers");

// const helpSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//     comment: {
//       type: String,
//       required: [true, "Comment is required"],
//     },
//   },
//   { versionKey: false, timestamps: true }
// );

// helpSchema.post("save", handleMongooseError);

// const Help = model("help", helpSchema);

// module.exports = Help;
