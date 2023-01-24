function CoolButton(props) {
  return (
    <button className={"button " + props.buttonClass}>
      <strong>{props.buttonName}</strong>
    </button>
  );
}

export default CoolButton;
