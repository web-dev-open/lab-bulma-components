

function CoolButton(prop){
    return(
        <div>
            <button class={prop.class} style={{ backgroundColor: prop.color, color: prop.text, margin: "20px"}}>{prop.name}</button>
        </div>
    );
}

export default CoolButton;