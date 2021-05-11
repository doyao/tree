import React, { useState } from 'react';
import {RouterPrompt} from '../../utils/Prompt'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
function TemperatureInput(props) {
    const toCelsius = (celsius) => {
        if (celsius == null || celsius === '') {
            return celsius
        } else {
            return (celsius - 32) * 5 / 9;
        }
    }
    const toFahrenheit = (fahrenheit) => {
        return fahrenheit=fahrenheit*5/9+32
    }
    const { count, scale } = props;
    const celsius = scale === 'c' ? toCelsius(count) : toFahrenheit(count);
    return (
        <div>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={celsius} readOnly/>
        </div>
    )
}
function Counter(props) {
    const {count}=props;
    return (
        <>
            摄氏度: {count}°C<br/>
            
        </>
    );
}
export default function States() {
    const [count, setCount] = useState(1);
    const [eidState,seteid]=useState(false);
    return (
        <fieldset>
            <TemperatureInput scale="c" count={count}/>
            <TemperatureInput scale="f" count={count}/>
            <Counter count={count}/>
            <button onClick={() => setCount(prevCount => prevCount - 1,seteid(true))}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1,seteid(true))}>+</button>
            <RouterPrompt promptBoolean={eidState}></RouterPrompt>
        </fieldset>
    )
}

