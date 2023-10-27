// Message.js
import React from 'react';
import 'bulma/css/bulma.css';

export default function Message(props) {
  let className = "message";

  // If isLink prop is true, add 'is-link' to the class name
  if (props.isLink) {
    className += ' is-link';
  }

  return (
    <article className={className}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children} 
      </div>
    </article>
  );
}
