const { UserValidate } = require("../middleware/validation");
const userModel = require("../models/user.model");
const createError = require("http-errors");

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { error } = UserValidate(req.body);
    console.log(error);
    if (error) {
      throw createError(error.details[0].message);
    }
    const isExits = await userModel.findOne({ email });
    if (isExits) {
      throw createError.Conflict(email + "is already in use");
    }
    const newUser = await userModel({
      firstName,
      lastName,
      email,
      password,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.json({
      status: 400,
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
       register
}