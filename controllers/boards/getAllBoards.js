const { Board } = require("../../models")

const getAllBoards = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Board.find({ owner }).populate('owner');

    res.json(result);
};

module.exports = getAllBoards;

