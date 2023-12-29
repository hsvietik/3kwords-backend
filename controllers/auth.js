const { HttpError, ctrlWrapper } = require("../helpers");
const registerSchema = require("../schemas/users");

const register = async (req, res) => {
  res.status(201).json(req.body);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  res.json(req.body);
};
module.exports = {
  register: ctrlWrapper(register), //try catch in ctrlWrapper
  updateUser: ctrlWrapper(updateUser),
};
