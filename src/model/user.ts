import Joi from "joi";

export const user = Joi.object().keys({

  phone: Joi.number().integer().description("手机号"),
  password: Joi.string().alphanum().min(6).max(12).description("密码")

});

export const userValidate = (params) => {
  const result = Joi.validate(params, user);
  return result;
};