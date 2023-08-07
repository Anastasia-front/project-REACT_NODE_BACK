const { Board, Background } = require("../../models")
const { boardSchemas } = require("../../schemas");
const { BadRequestError, getBackgroundId } = require("../../helpers");

const addBoard = async (req, res) => {
    const { value, error } = boardSchemas.addBoardSchema.validate(req.body, {
        abortEarly: false,
    });
    BadRequestError(error);
    const { background: title } = value;
    const background = await getBackgroundId(Background, title)  
    const { _id: owner } = req.user;
    const result = await Board.create({ ...value, background, owner });
    res.status(201).json(result);
};

module.exports = addBoard;

