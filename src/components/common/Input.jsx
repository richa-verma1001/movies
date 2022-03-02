import React from 'react'

export default function Input(props) {
  const {
    label,
    name,
    value,
    type,
    onChange,
    error } = props;

  const showError = error !== '' ? true : false;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        name={name}
        value={value}
        id={name}
        type={type}
        onChange={onChange} />
      <span className={showError ? 'error' : ''}>{error}</span>
    </>
  )
}
