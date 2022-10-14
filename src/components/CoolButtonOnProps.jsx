import React from "react";
const CoolButton = ({buttonName, isSmall, isDanger, isRounded, isSuccess}) => {
  return (
    <div className="is-flex is-justify-content-center is-align-items-center mt-4">
      <button className={['isSmall', 'isDanger', 'isRounded']}>{['button', buttonName]}</button>
    </div>
  );
};

export default CoolButton;
