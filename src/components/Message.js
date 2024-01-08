import React from "react";
import './Message.css';

const classMap = {
  isInfo: 'is-info',
  isSuccess: 'is-success',
  isDanger: 'is-danger',
  isWarning: 'is-warning',
};

const Message = (props) => {
  const additionalClasses = classMap[props.type] || '';

  return (
    <article className={`message ${additionalClasses}`}>
      <div className="message-header">
        <p>{props.title}</p>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );
};

export default Message;
