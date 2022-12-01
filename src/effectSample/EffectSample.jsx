import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);

    //use effect sadece BİR KEZ çalışıyor dolayısıyla call edeceğim metotları bunun içerisine yazabilirim. fetch, axios vb.
    useEffect(() => {
        console.log('Component rendered - Use Effect!');
    }, []);

    useEffect(() => {
        
        console.log('Effect - 2');
    
    }, [counter2])
    

    return (<>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
        </div>
        <div>
        <h1>{counter2}</h1>
            <button onClick={() => setcounter2(counter2 + 1)}>Increase-2</button>
        </div>
    </>)
}

export default EffectSample