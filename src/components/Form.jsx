import React from "react";
import formData from "../data/formData";
import FormField from "./FormField";
const Form = (data, i) => {
  return (
    <>
      {formData.map((data, i) => {
        return (
          <FormField
            key={i}
            label={data.label}
            type={data.type}
            placeholder={data.placeholder}
          />
        );
      })}
    </>
  );
};

export default Form;
