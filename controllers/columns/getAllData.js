const { Column } = require("../../models")

const getAllData = async (req, res) => {
    const { id } = req.params;
    const result = await Column.aggregate([
        {
            $match: {
                board: id,
            },
        },
        {
            // $lookup: {
            //     from: 'tasks',
            //     localField: '_id',
            //     foreignField: 'parentColumn',
            //     as: 'tasks',
            // },
        },
    ]);

    res.json(result);
};

module.exports = getAllData;