const { Types } = require("mongoose");
const { Board } = require("../../models")


const getAllBoards = async (req, res) => {
    const { _id } = req.user;
    const result = await Board.aggregate([
        {
            $match: {
                $expr: {
                    $in: [new Types.ObjectId(_id), "$owners"]
                }
            }
        },
        {
            $lookup: {
                from: "users",
                let: { owners: "$owners" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $in: ["$_id", "$$owners"]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            avatarURL: 1,
                            name: 1,
                            email: 1
                        }
                    }
                ],
                as: "owners",
            },
        },
    ]);
    res.json(result);
};

module.exports = getAllBoards;

