import React, { useState } from 'react'

function ArrayStateSample1() {

    let metalBands = ['Iron Maiden', 'Gojira', 'Parkway Drive', 'Slipknot', 'Razon Inc.', 'Furtherial'];

    const [metals, setmetals] = useState(metalBands);

    const clearAll = () => {
        setmetals([])
    }

    return (<>
        <h1>Metals Length: <span>{metals.length}</span></h1>
        <ul>
            {
                metals.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
        <button onClick={() => clearAll()}>Clear All</button>
    </>
    )
}

export default ArrayStateSample1