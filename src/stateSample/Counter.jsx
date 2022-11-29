import React, { useState } from 'react'

function Counter() {

    console.log('Counter comp rendered!!');

    //counter state bağlı özel bir değişkenim.
    //setCounter bu değişkeni değiştirecek TEK FONKSIYON!
    //0 ise default değer
    const [counter, setCounter] = useState(0);


    const increase = () => {
        setCounter(counter + 1);
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => increase()}>Increase</button>
        <span>Hello</span>
    </>
    )
}

export default Counter