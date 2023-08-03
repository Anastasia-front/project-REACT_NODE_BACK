const { Column } = require("../../models")

const getAllData = async (req, res) => {
    // const { id } = req.params;
    const result = await Column.aggregate([
        // {
        //     $match: {
        //         _id: new mongoose.Types.ObjectId(dashboardId)
        //     }
        // },
        // {
        //     $lookup: {
        //         from: "columns",
        //         localField: "_id",
        //         foreignField: "owner",
        //         as: "columns"
        //     }
        // }
    ]);

    res.json(result);
};

module.exports = getAllData;