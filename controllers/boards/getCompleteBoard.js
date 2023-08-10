const { Types } = require("mongoose");
const { Board } = require("../../models")
const { HttpError } = require('../../helpers')

const getCompleteBoard = async (req, res) => {
    const { id } = req.params;
    const result = await Board.aggregate([
        {
            $match: {
                _id: new Types.ObjectId(id),
            },
        },
        {
            $lookup: {
                from: "columns",
                localField: "_id",
                foreignField: "board",
                as: "columns",
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
            $unwind: {
                path: "$columns",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $lookup: {
                from: "tasks",
                localField: "columns._id",
                foreignField: "column",
                as: "columns.tasks",
            },
        },
        {
            $addFields: {
                owner: { $arrayElemAt: ["$ownerArr", 0] },
                columns: {
                    $cond: {
                        if: { $eq: ["$columnOrder", []] },
                        then: "$REMOVE",
                        else: "$columns",
                    },
                },
            },
        },
        {
            $project: {
                "owner.accessToken": 0,
                "owner.password": 0,
                "owner._id": 0,
                "owner.theme": 0,
                "ownerArr": 0,
            },
        },
        {
            $group: {
                _id: "$_id",
                title: { $first: "$title" },
                icon: { $first: "$icon" },
                background: { $first: "$background" },
                columnOrder: { $first: "$columnOrder" },
                owner: { $first: "$owner" },
                columns: { $push: "$columns" },
            },
        },
    ]);

    if (result.length === 0) {
        throw HttpError(404, `Board ${id} not found`);
    }
    res.json(result[0]);
};

module.exports = getCompleteBoard;