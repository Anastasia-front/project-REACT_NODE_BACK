const currentUser = async (req, res, next) => {
    const {
        _id,
        name,
        email,
        theme,
        avatarURL,
        boards,
    } = req.user;
    res.json({ _id, name, email, theme, avatarURL, boards });
};

module.exports = currentUser;