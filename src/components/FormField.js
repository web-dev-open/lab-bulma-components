import React, { Component } from 'react'

class FormField extends Component {
    render() {
      const {label, type,  placeholder } = this.props
  
      return (
        <div  class="field">
            <label  class="label">{label}</label>
            <div  class="control">
                <input  class="input"  type= {type}  placeholder={placeholder}  />
            </div>
        </div>
      )
    }
  }

export default FormField