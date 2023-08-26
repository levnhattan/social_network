const joi = require("joi");

const UserValidate = (data) => {
  const userSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi
      .string()
      .min(4)
      .max(32)
//       .pattern(new RegExp("^[a-zA-Z0-9]$"))
      .required(),
    firstName: joi.string().alphanum().min(5).max(32).required(),
    lastName: joi.string().alphanum().min(5).max(32).required(),
  });
  return userSchema.validate(data);
};

module.exports = {
  UserValidate,
};
