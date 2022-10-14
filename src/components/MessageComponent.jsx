import React from "react";
import Message from "./Message";
const MessageComponent = ({ title, msg, classname }) => {
  return (
    <div>
      <Message
      title="Info"
      msg={` Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.`}
      classname="message is-info"
      />
    </div>
  );
};
export default MessageComponent;
