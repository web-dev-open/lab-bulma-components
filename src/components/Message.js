function Message(props) {
  return (
    <div>
      <article class="message">
        <div class="message-header">
          <p>{props.title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>
        </div>
      </article>
    </div>
  );
}

export default Message;
