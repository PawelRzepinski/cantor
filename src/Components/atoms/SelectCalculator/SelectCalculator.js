import React from "react";
import styled from 'styled-components';


const SelectCalculator = ({ currency }) => {

    const handleChange = (e) => {
        const select = e.target;
        console.log(select.options[select.selectedIndex])
    }

    return (
        <select onChange={ handleChange }>
            {currency.map(item => (
                <option key={ item.code } data-buy={ item.bid } data-sale={ item.ask }>
                    { item.code }
                </option>
            ))}
        </select>
    )
}

export default SelectCalculator;