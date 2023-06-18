import React from "react";

const TextInput = ({ id, name, title, placeholder, type, autoComplete, value, onInput }) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={type} className="block text-sm font-medium leading-6 text-gray-900">
                    {title}
                </label>
            </div>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    value={value}
                    onInput={({ target }) => onInput(target.value)}
                    placeholder={placeholder}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

    );
};

export default TextInput;