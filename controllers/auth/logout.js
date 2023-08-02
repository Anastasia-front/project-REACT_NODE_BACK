const { User } = require('../../models');

const logout = async (req, res, next) => {
    const { user } = req
    const result = await User.findOneAndUpdate({_id: user._id}, {accessToken: ''})
    res.status(204).json()
};

module.exports = logout;