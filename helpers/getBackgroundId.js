const getBackgroundId = async (model, title) => {
    if (!title) return null;
    const { _id } = await model.findOne({ title })
    return _id
};

module.exports = getBackgroundId;
