import React from 'react'
import "../components/FormField.css"

const FormField = ({label,type,placeholder}) => {
  return (
    
    <div className='field container'>
    <div className="columns">
     <div className="column is-6 has-text-left">

      <label className='label'>{label}</label>
    <div className="controls">
        <input className='input' type={type}  placeholder={placeholder}/>
    </div>
     </div>
    </div>
    </div>
  )
}

export default FormField
