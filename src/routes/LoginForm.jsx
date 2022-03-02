import React, { Component } from 'react';
import Input from '../components/common/Input';
import FormWrapper from '../components/common/FormWrapper';
import { validateForm } from '../utils/formValidation';
import Joi from 'joi-browser';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: '', password: '' },
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
    const data = { ...this.state.data };
    const name = e.target.name;
    const value = e.target.value;
    data[name] = value;

    this.setState({
      data: data
    })
  }

  handleLogin(e) {
    e.preventDefault();
    const errors = validateForm(this.state.data, this.schema, { abortEarly: false });
    this.setState({ errors });
  }

  render() {
    const { data, errors } = this.state;
    //const disableSubmit = errors != '' ? true : false;
    return (
      <FormWrapper heading="Login">
        <Input
          label="Username"
          name="username"
          type="text"
          value={data.username}
          onChange={this.handleChange}
          error={errors.username} />

        <Input
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={this.handleChange}
          error={errors.password} />

        <button onClick={this.handleLogin}>Login</button>
      </FormWrapper >
    )
  }
}
