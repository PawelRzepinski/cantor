import React from 'react';


const Input = ({type, placeholder, value, disabled, ...props}) => (
    <input placeholder={placeholder} type={type} value={value} disabled={disabled} {...props}></input>
)

export default Input;