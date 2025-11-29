// src/components/Message.js
import React from "react";

function Message({ title, children, ...props }) {
  let classNames = "message";

  Object.keys(props).forEach((key) => {
    if (key.startsWith("is")) classNames += ` ${key}`;
  });

  return (
    <article className={classNames}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">{children}</div>
    </article>
  );
}

export default Message;
