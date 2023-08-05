const { Types } = require("mongoose");
const { Board } = require("../../models")


const getAllBoards = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Board.aggregate([
        {
            $match: {
                owner: new Types.ObjectId(owner),
            },
        },
        {
            $lookup: {
                from: "backgrounds",
                localField: "background",
                foreignField: "_id",
                as: "backgroundArr",
            },
        },
        {
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "_id",
                as: "ownerArr",
            },
        },
        {
            $addFields: {
                owner: { $arrayElemAt: ["$ownerArr", 0] },
                background: { $arrayElemAt: ["$backgroundArr", 0] },
            },
        },
        {
            $project: {
                "owner.accessToken": 0,
                "owner.password": 0,
                "backgroundArr": 0,
                "ownerArr": 0,
            },
        },
    ]);
    res.json(result);
};

module.exports = getAllBoards;

