const queryString = require('query-string');
const axios = require('axios');
const { User } = require("../../models");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, HOSTING_URL, BASE_URL } = process.env;

const googleRedirect = async (req, res) => {
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    const urlObj = new URL(fullUrl);
    const urlParams = queryString.parse(urlObj.search);
    const code = urlParams.code;
    const serverHOST = req.get("host") === "localhost:3007" ? BASE_URL : HOSTING_URL;

    const tokenData = await axios({
        url: "https://oauth2.googleapis.com/token",
        method: "post",
        data: {
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: `${serverHOST}/api/users/google-redirect`,
            grant_type: "authorization_code",
            code,
        },
    });

    const {data: {id, email, name}} = await axios({
        url: "https://www.googleapis.com/oauth2/v2/userinfo",
        method: "get",
        headers: {
            Authorization: `Bearer ${tokenData.data.access_token}`,
        },
    });

    const user = await User.findOne({ email });
    if (!user) {
        const result = await User.create({
            name,
            email,
            password: id,
        });

        const accessToken = result.signToken();
        await User.findOneAndUpdate({ email }, { accessToken });

        return res.redirect(`https://tkachenko01001.github.io/project-REACT_NODE/auth/login/${accessToken}`);
    };

    if (user) {
        const accessToken = user.signToken();
        await User.findOneAndUpdate({ email }, { accessToken });
        return res.redirect(`https://tkachenko01001.github.io/project-REACT_NODE/auth/login/${accessToken}`);
    }


    res.json({rez: 'уже есть такой'});
};

module.exports = googleRedirect