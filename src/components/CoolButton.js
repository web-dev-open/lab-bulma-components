

import React from 'react';

function CoolButton({ isSuccess, children }) {
  // Constructing className based on props
  let className = 'button';
  if (isSuccess) {
    className += ' is-success';
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default CoolButton;
