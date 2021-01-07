import React from 'react';
import styled from 'styled-components';
import rates from '../../../data/data';



const Input = ({placeholder}) => (
    <input placeholder={placeholder}></input>
)


class Select extends React.Component {
    render(){
        return (
            <select onChange={e => {console.log(e.target.value)}}>
                {rates.map(rate => (
                    <option key={rate.code}>{rate.code}</option>
                ))}
            </select>

            // <div>
            //     <div>
            //         window
            //     </div>
            //     <ul>
            //         {rates.map(rate => (
            //             <li>{rate.code}</li>
            //         ))}
            //     </ul>
            // </div>
        )
    }
}



class Calculator extends React.Component {
    state = {
        currencyA: {
            code: 'PLN',
            mid: 1,
        },
        currencyB: {
            code: 'USD',
            mid: 4.5
        },
        value: 1000,
    }



    render () {
        return (
            <div>
                <div>
                    <Input placeholder={"1000"} />
                    <Select name={"paweł"} />
                    
                </div>
            </div>
        )
    }
}

export default Calculator;