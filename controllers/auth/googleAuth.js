const queryString = require('query-string');

const { GOOGLE_CLIENT_ID, HOSTING_URL, BASE_URL } = process.env;

const googleAuth = (req, res) => {
    const strigifiedParams = queryString.stringify({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: `${BASE_URL}/api/users/google-redirect`,
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
        response_type: "code",
        access_type: "offline",
        prompt: "consent",
    });

    return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${strigifiedParams}`)
};

module.exports = googleAuth;