const email = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]+$/;
const onlyLatin = /^[a-zA-Z0-9]+$/;
const deadline = /^\d{8}$/;

module.exports = {
  email,
  password,
  onlyLatin,
  deadline,
};
