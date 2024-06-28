import React from "react";

const Message = (props) => {
    const className=`message ${props.isInfo?"is-info":""}`;
  return (
    <>
      <article class={className}>
        <div class="message-header">
          <p>{props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          {props.children}
        </div>
      </article>
    </>
  );
};

export default Message;