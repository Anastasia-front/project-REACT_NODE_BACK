const { Board, User } = require("../../models")
const { boardSchemas } = require("../../schemas");
const { BadRequestError, HttpError } = require("../../helpers");

const addUser = async (req, res) => {
    const { value, error } = boardSchemas.ownersSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) BadRequestError(error);
    const { email } = value;
    const { id } = req.params;
    const user = await User.findOne({ email });
    if (!user) throw HttpError(400, "User does not exist");
    const board = await Board.findById(id);
    if (board.owners.includes(user._id)) {
        throw HttpError(409, `User ${user.email} is already working with board ${id}`);
    }
    await Board.findByIdAndUpdate(id, { $push: { owners: user._id } });
    res.json({ message: `User ${user.email} has successfully connected to board ${id}` });
};

module.exports = addUser;