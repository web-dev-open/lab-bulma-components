import React from 'react';

function CoolButton({ isSuccess, children }) {

    const className = isSuccess ? 'button is-success' : 'button'; 

    return (
        <button className={className}>
            {children} 
        </button>
    );
}

export default CoolButton;