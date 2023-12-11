import React from 'react';

const classMap = {
  // prop name: Bulma class name
  isInfo: 'is-info',
  isSuccess: 'is-success',
  isWarning: 'is-warning',
  isDanger: 'is-danger'
};

const Message = (props) => {
  // Extract all prop names
  const propNames = Object.keys(props);

  // Filter out prop names that are not in the classMap
  const validPropNames = propNames.filter((propName) => classMap[propName]);

  // Generate an array of Bulma class names based on the valid prop names
  const classNames = validPropNames.map((propName) => classMap[propName]);

  // Concatenate the generated class names with the 'message' class
  const messageClasses = `message ${classNames.join(' ')} ${props.size || ''}`;

  return (
    <article className={messageClasses}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );
};

export default Message;