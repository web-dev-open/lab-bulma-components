import "bulma/css/bulma.css";
import React from "react";
import CoolButtonOnProps from "./components/CoolButtonOnProps";
import propName from "../data/propName";
const ButtonOnProps = () => {
  return (
    <div className="is-flex is-justify-content-center is-align-items-center mt-4">
      {propName.map((data, i) => {
        return (
          <>
            <CoolButtonOnProps
              key={i}
              propname={data.map(['isSmall', 'isDanger', 'isRounded'])}
              btnName={"Button-1"}
            />
            <CoolButtonOnProps
              key={i}
              propname={data.propname}
              btnName={"Button-1"}
            />
          </>
        );
      })}
    </div>
  );
};

export default ButtonOnProps;
