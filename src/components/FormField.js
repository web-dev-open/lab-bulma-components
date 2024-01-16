import './FormField.css';

export default function FormField(props) {
    return (
        <div class="inputField">
            <label class="label">{props.label}</label>
            <input class="input" type={props.type} placeholder={props.placeholder} />
        </div>
    )
}