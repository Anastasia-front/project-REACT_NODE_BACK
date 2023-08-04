const { helpSchema } = require("../../schemas");
const { HttpError, sendEmail } = require("../../helpers");
require("dotenv").config();

const { SUPPORT_DEPARTMENT } = process.env;

const help = async (req, res) => {
  const { error } = helpSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join("; ");
    throw HttpError(400, errorMessage);
  }
  const { email, comment } = req.body;

  const helpEmail = {
    to: SUPPORT_DEPARTMENT,
    from: email,
    subject: "Help Request",
    html: `<p>Comment from user: ${email} (email to which to return a reply)</p><p>${comment}</p>`,
  };

  await sendEmail(helpEmail);

  res.json({
    message: "Your comment has been sent",
  });
};

module.exports = help;
