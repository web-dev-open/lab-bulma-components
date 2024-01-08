import React from "react";
import './FormField.css';

const FormField = (props) => {
    const { label, type ,placeholder } = props;

    return(
       <div className="field">
         <label className="label">{label}</label>
        <div className="control">
           <input className="input" type={type} placeholder={placeholder}/>


        </div>

       </div>
    );
}
export default FormField;