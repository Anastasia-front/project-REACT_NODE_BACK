const fieldRequired = (field) => {
  return `Missing required ${field} field`;
};

const emailInvalid =
  "Invalid email field. It must contain only Latin letters and meet all requirements for mail; may include numbers, letters in different case";
const passwordInvalid =
  "Invalid password field. It must contain only Latin letters;  may contain numbers, signs, letters in different case; does not contain a space";
const nameInvalid =
  "Invalid name field. It must contain only Latin letters; may contain space, numbers, signs, letters in different case";

module.exports = { fieldRequired, emailInvalid, passwordInvalid, nameInvalid };
