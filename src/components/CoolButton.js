function CoolButton(props) {
  return (
    <div className="ml-3">
      <button className={props.attribute}>{props.name}</button>
    </div>
  );
}

export default CoolButton;
