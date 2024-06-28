import React from "react";

const CoolButton = (props) => {
  const bulmaClassMap = {
    isCentered: "is-centered",
    isActive: "is-active",
    isBlack: "is-black",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white",
  };

  // Filter out props that are not in the map and concatenate the corresponding Bulma classes
  const className = Object.keys(props)
    .filter((propName) => bulmaClassMap[propName])
    .map((propName) => bulmaClassMap[propName])
    .join(" ");

  return (
    <>
      <button className={`button ${className}`}>{props.children}</button>
    </>
  );
};

export default CoolButton;