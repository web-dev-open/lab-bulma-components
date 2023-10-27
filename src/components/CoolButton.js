// CoolButton.js
import React from 'react';
import 'bulma/css/bulma.css';

export default function CoolButton(props) {
  // Create an object that maps prop names to Bulma class names
  const classes = {
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

  // Initialize a variable with the value of "button"
  let className = "button";

  // Loop through the props and add any Bulma classes that are true
  for (let key in props) {
    if (props[key] && classes[key]) {
      className += ` ${classes[key]}`;
    }
  }

  // Return a JSX element with the className attribute and the text of the button
  return (
    <button className={className}>
      {props.children}
    </button>
  );
}
