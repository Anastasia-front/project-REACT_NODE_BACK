const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const backgroundSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        mobile2x: {
            type: String,
            required: true,
        },
        tablet: {
            type: String,
            required: true,
        },
        tablet2x: {
            type: String,
            required: true,
        },
        desktop: {
            type: String,
            required: true,
        },
        desktop2x: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

backgroundSchema.post("save", handleMongooseError);

const Background = model("background", backgroundSchema);

module.exports = Background;