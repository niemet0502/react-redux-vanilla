import React from 'react'

const FormInput = ({value, handleChange, name, label, type}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type ? type : 'text'} name={name} value={value} onChange={handleChange} className="form-control mt-2" id={name} aria-describedby={`${label}Help`} />
    </div>
  )
}

export default FormInput