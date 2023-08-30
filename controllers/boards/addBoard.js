const { Board } = require("../../models")
const { boardSchemas } = require("../../schemas");
const { BadRequestError } = require("../../helpers");

const addBoard = async (req, res) => {
    const { value, error } = boardSchemas.addBoardSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { _id } = req.user;
    const result = await Board.create({ ...value, owners:[_id] });
    res.status(201).json(result);
};

module.exports = addBoard;

