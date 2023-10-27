import React from "react";
const CoolButton = ({ btnName, btnClassName }) => {
  return (
    <div>
      <button className={btnClassName}>{btnName}</button>
    </div>
  );
};

export default CoolButton;