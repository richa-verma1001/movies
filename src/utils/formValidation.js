import Joi from 'joi-browser';

export function validateForm(data, schema, options) {
  let validation = Joi.validate(data, schema, options);
  let errors = validation.error ? validation.error.details : {};
  let result = {};

  if (Object.keys(errors).length === 0)
    return errors;

  errors = errors.forEach((item) => {
    const name = item.context.key;
    const value = item.message;
    const error = { [name]: value };
    result = { ...result, ...error }
  })

  return result;

}