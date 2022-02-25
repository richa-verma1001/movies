import { faJoint } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Input from '../components/common/Input';
import Joi from 'joi-browser';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '' },
      errors: { username: '', password: '' }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  };

  handleChange(e) {
    const account = { ...this.state.account };
    const name = e.target.name;
    const value = e.target.value;
    account[name] = value;

    this.setState({
      account: account
    })
  }

  isValid() {
    const isValid = false;
    const account = { ...this.state.account };
    let errors = { ...this.state.errors };
    let allErrors = Joi.validate(account, this.schema, { abortEarly: false });
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

  handleLogin(e) {
    e.preventDefault();
    const isValid = this.isValid();
    //2. if isValid, Submit Form
  }

  render() {
    return (
      <div className='loginForm'>
        <h1>Login</h1>
        <form>
          <Input
            label="Username"
            name="username"
            type="text"
            value={this.state.account.username}
            onChange={this.handleChange}
            error={this.state.errors.username} />

          <Input
            label="Password"
            name="password"
            type="password"
            value={this.state.account.password}
            onChange={this.handleChange}
            error={this.state.errors.password} />

          <button onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    )
  }
}
