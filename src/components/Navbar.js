import React from 'react';
import CoolButton from './CoolButton';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="flex justify-between items-center p-4">
                <div className='flex items-center'>
                    <img alt="logo" src="https://bulma.io/assets/brand/Bulma%20Logo.png" className="h-10 mr-2" />
                    <button className="navbar-item">Home</button>
                </div>
                <div className='flex space-x-2'>
                    <CoolButton isSuccess>Login</CoolButton> {/* Use CoolButton for Login */}
                    <CoolButton>Signup</CoolButton> {/* Use CoolButton for Signup */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;