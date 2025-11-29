// src/components/FormField.js
import React from "react";
import "./FormField.css";

function FormField({ label, type = "text", placeholder = "", ...props }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
}

export default FormField;
