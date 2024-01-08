import React from "react";
import './CoolButton.css';

const CoolButton = (props) => {
    //extracting additional classes passed as props
     const additionalClasses = props.isSuccess ? 'is-success' : '';

     return (
        <button className={'button ${additionalClasses}'}>
          {props.children}
          
        </button>
     );
};

export default CoolButton;