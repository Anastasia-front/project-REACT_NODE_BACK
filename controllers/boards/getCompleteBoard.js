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
            $group: {
                _id: "$_id",
                title: { $first: "$title" },
                icon: { $first: "$icon" },
                background: { $first: "$background" },
                columnOrder: { $first: "$columnOrder" },
                owners: { $first: "$owners" },
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