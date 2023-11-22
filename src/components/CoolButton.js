const classMap = {
    // prop name: bulma class name
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
    const classNames = Object.keys(props)
      .filter((prop) => classMap[prop]) // Filter out props not in classMap
      .map((prop) => classMap[prop]) // Map props to Bulma class names
      .join(' '); // Join class names with a space
  
    return (
      <button className={`button ${classNames}`} {...props}>
        {props.children}
      </button>
    );
  };
  
  export default CoolButton;