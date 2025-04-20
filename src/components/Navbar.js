import React from 'react';
import Button from './Button';

function Navbar() {
    return (
        <nav class="bg-white shadow">
            <div className="is-flex-direction-row justify-content p-2">
                <div className='is-flex-direction-row justify-content is-align-content-space-between'>
                    <img alt="logo" src="https://bulma.io/assets/brand/Bulma%20Logo.png" className="h-5 mr-6" />
                    <button className="navbar-item">Home</button>
                    <Button isSuccess>Login</Button>
                    <Button>Signup</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;