import React from 'react';
import PropTypes from 'prop-types';


const Input = ({type, placeholder, value, disabled, ...props}) => {
    return (
    <input placeholder={placeholder} type={type} value={value} disabled={disabled} {...props}></input>
)
    }

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

export default Input;