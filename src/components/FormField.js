import React from 'react';

function FormField({ label, type, placeholder }) {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <label className="block text-black mb-3 ml-1">{label}</label>
            <div className="control">
                <input 
                    className="input bg-white border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    type={type} 
                    placeholder={placeholder} 
                />
            </div>
        </div>
    );
}

export default FormField;