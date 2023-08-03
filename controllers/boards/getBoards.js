const { Board } = require("../../models")

const getBoards = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Board.find({ owner }).populate('owner');

    res.json(result);
};

module.exports = getBoards;

