import "./FormField.css";


function FormField(props) {

    return (

        <form>
            <label className="label">{props.label}
                <input className="field" type={props.type}  placeholder={props.placeholder}/>
            </label>
        </form>
    );
    
}

export default FormField;