import React from "react";



const SelectCalculator = ({ currency, submitFn }) => (
    <select onChange={submitFn}>
        {currency.map(item => (
            <option key={ item.code } data-sale={ item.bid } data-buy={ item.ask }>
                { item.code }
            </option>
        ))}
    </select>
)


export default SelectCalculator;