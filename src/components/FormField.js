import React from "react";
const FormField = ({ label, type, placeholder }) => {
  return (
    <form className="box">
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            label={label}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </form>
  );
};

export default FormField;
