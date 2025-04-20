import React from 'react';

function Button({ isSuccess, children }) {

    const className = isSuccess ? 'button is-success' : 'button'; 

    return (
        <button className={className}>
            {children} 
        </button>
    );
}

export default Button;