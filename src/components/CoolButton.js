import React from "react";

const classMap = {
    // prop name: Bulma class name
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

const coolButton = (props) => {
     // Extract all prop names
    const propNames = Object.keys(props);

    // Filter out prop names that are not in the classMap
    const validPropNames = propNames.filter((propName) => classMap[propName]);

    // Generate an array of Bulma class names based on the valid prop names
    const classNames = validPropNames.map((propName) => classMap[propName]);

    // Concatenate the 'button' class with the generated class names
    const buttonClasses = `button ${classNames.join(' ')}`;


    return (
        <button className={buttonClasses}>
            {props.children}
        </button>
    );
};

export default coolButton;