import "bulma/css/bulma.css";
import React from "react";
import CoolButton from "./CoolButton";
const Button = () => {
  return (
    <>
    <div className="is-flex is-justify-content-center is-align-items-center mt-4">
    <CoolButton btnName={"Button 1"} btnClassName={"button is-success mr-4"}/>
    <CoolButton btnName={"Button 2"} btnClassName={"button"} />
    </div>
    </>
  );
};

export default Button;
