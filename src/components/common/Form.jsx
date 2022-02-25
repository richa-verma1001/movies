import React, { Children } from 'react'
import Joi from 'joi-browser';

export default function Form(props) {
  const { account, errors, schema, options } = this.props;

  const isValid = () => {
    const isValid = false;
    const account = { account };
    let errors = { errors };
    let allErrors = Joi.validate(account, schema, { abortEarly: false });
    allErrors = allErrors.error?.details;

    if (allErrors) {
      allErrors?.map((error) => {
        const errorName = error.context.key;
        const errorValue = error.message;
        const result = { [errorName]: errorValue };
        errors = { ...errors, ...result };
      });

      this.setState({
        errors: errors
      })
    } else {
      this.setState({
        errors: { username: '', password: '' }
      })
      isValid = true;
    }
    return isValid;
  }

  return (
    <div>
      {children}
    </div>
  )
}
