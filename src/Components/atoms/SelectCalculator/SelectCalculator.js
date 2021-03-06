import React from "react";
import PropTypes from 'prop-types';



const SelectCalculator = ({ currency, submitFn }) => (
    <select onChange={submitFn}>
        {currency.map(item => (
            <option key={ item.code } data-sale={ item.bid } data-buy={ item.ask }>
                { item.code }
            </option>
        ))}
    </select>
)


SelectCalculator.propTypes = {
    currency: PropTypes.array.isRequired,
    submitFn: PropTypes.func.isRequired,
}


export default SelectCalculator;