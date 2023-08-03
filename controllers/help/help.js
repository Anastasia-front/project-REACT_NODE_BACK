// const { Help } = require("../../models");
const { helpSchema } = require("../../schemas");
const { HttpError, sendEmail } = require("../../helpers");
const { ctrlWrapper } = require("../../decorators");

const help = async (req, res) => {
  const { error } = helpSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join("; ");
    throw HttpError(400, errorMessage);
  }
  const { email, comment } = req.body;

  //   const user = await Help.findOne({ email });
  //   if (!user) {
  //     throw HttpError(401, "Email not found");
  //   }

  const helpEmail = {
    to: "vinem10460@weizixu.com",
    from: email,
    subject: "Help Request",
    html: `<p>Comment from user: ${email}</p><p>${comment}</p>`,
  };

  await sendEmail(helpEmail);

  res.json({
    message: "Your comment has been sent",
  });
};

module.exports = ctrlWrapper(help);
