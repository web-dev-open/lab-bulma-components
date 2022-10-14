import "bulma/css/bulma.css";
import React from "react";
const Message = ({ title, msg, classname }) => {
  return (
    <div className="mt-4">
      <article className={classname}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{msg}</div>
      </article>
    </div>
  );
};
export default Message;
