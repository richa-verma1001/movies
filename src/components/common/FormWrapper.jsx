import React, { Component } from 'react'

export default class FormWrapper extends Component {
  render() {
    const { heading, children } = this.props;
    return (
      <div className='formWrapper'>
        <h1>{heading}</h1>
        <form>{children}</form>
      </div>
    )
  }
}
