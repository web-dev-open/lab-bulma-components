import React from "react";
const FormField = ({ label, type, placeholder }) => {
  return (
    <div className="field">
      <form>
        <label className="label">Name</label>
        <div className="control">
          <input label={label} type={type} placeholder={placeholder} />
        </div>
      </form>
      {/* <form  label={label}  type={type}  placeholder={placeholder}  /> */}
    </div>
  );
};

export default FormField;
