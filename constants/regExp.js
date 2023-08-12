const email = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const password = /^[a-zA-Z0-9\-!@#$%^&*()_+,.:;'"?/]+$/;
const name = /^[a-zA-Z0-9 !@#$%^&*()_+,.:;'"?/-]+$/;
const deadline = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

module.exports = {
  email,
  password,
  name,
  deadline,
};
