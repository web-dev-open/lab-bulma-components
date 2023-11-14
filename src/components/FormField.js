import "./FormField.css";

function FormField(props) {
  return (
    <div className="container mb-4">
      <div className="field">
        <label className="label has-text-left">{props.label}</label>
        <div className="control">
          <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </div>
  );
}

export default FormField;
