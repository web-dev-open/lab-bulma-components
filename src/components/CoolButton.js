import React from "react";
import './CoolButton.css';

// const CoolButton = (props) => {
//     //extracting additional classes passed as props
//      const additionalClasses = props.isSuccess ? 'is-success' : '';

//      return (
//         <button className={'button ${additionalClasses}'}>
//           {props.children}
          
//         </button>
//      );
// };

const classMap = {
    isCentered: 'is-centered',
    isActive: 'is-active',
    isBlack: 'is-black',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white'
  };
  
  const CoolButton = (props) => {
    const additionalClasses = Object.keys(props)
      .filter((prop) => classMap[prop])
      .map((prop) => classMap[prop])
      .join(' ');
  
    return (
      <button className={`button ${additionalClasses}`}>
        {props.children}
      </button>
    );
  };
  

export default CoolButton;