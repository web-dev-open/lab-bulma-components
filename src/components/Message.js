

import React from 'react';

function Message({ isInfo, title, children }) {
  const classes = isInfo ? 'message is-info' : 'message';
  
  return (
    <div className={classes}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">
        {children}
      </div>
    </div>
  );
}

export default Message;
