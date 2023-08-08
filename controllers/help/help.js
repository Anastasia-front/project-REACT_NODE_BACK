const { helpSchema } = require("../../schemas");
const { BadRequestError, sendEmail } = require("../../helpers");

const { SUPPORT_DEPARTMENT } = process.env;

const help = async (req, res) => {
  const { error } = helpSchema.validate(req.body, { abortEarly: false });
  if (error) BadRequestError(error);

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
