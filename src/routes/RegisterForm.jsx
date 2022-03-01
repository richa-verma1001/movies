import React, { Component } from 'react'
import FormWrapper from '../components/common/FormWrapper';
import Input from '../components/common/Input';
import { validateForm } from '../utils/formValidation';
import Joi from 'joi-browser';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '', name: '' },
      errors: { username: '', password: '', name: '' }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label('Name')
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

  handleLogin(e) {
    e.preventDefault();
    const errors = validateForm(this.state.account, this.schema, { abortEarly: false });
    this.setState({ errors });
    // const isValid = this.isValid();
    //2. if isValid, Submit Form
  }

  render() {
    return (
      <FormWrapper heading="Register">
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

        <Input
          label="Name"
          name="name"
          type="text"
          value={this.state.account.name}
          onChange={this.handleChange}
          error={this.state.errors.name} />

        <button onClick={this.handleLogin}>Register</button>

      </FormWrapper>
    )
  }
}
