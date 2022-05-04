import React from 'react'

const FormTextArea = ({value, handleChange, label, name}) => {
  return (
    <div className="form-group mt-4">
      <label htmlFor={name}>{label}</label>
      <textarea className="form-control mt-2" value={value} name={name} onChange={handleChange} id={name} rows="3">
        
      </textarea>
    </div>
  )
}

export default FormTextArea