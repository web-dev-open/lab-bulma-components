import React from "react";

const bulmaMessageClasses = {
  isInfo: "is-info",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger",
};

function Message({ title, children, ...props }) {
  let classNames = "message";

  Object.keys(props).forEach((key) => {
    if (bulmaMessageClasses[key]) {
      classNames += ` ${bulmaMessageClasses[key]}`;
    }
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
