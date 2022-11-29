import React, { useState } from 'react'

function ArrayStateSample2() {

    const citySource = ['İstanbul', 'İzmir', 'Ankara', 'Trabzon'];

    const [cities, setcities] = useState(citySource);
    const [cityName, setcityName] = useState('');

    const add = () => {
        setcities([cityName,...cities]);
    }

    const clearAll = () => {
        setcities([]);
    }

    const removeItem = (index) => {
        
        cities.splice(index,1);
        setcities([...cities]);
    }

  return (<>
  <h1>Length: {cities.length}</h1>
  <div>
      <label>City: </label>
      <input type='text' onChange={(e) => setcityName(e.target.value)} />
      <button onClick={() => add()}>Add</button>
  </div>
  <div>
      <button onClick={() => clearAll()}>Clear All</button>
  </div>
  <ul>
      {
          cities.map((item,index) => <li onClick={() => removeItem(index)} key={index}>{item}</li>)
      }
  </ul>
  </>
  )
}

export default ArrayStateSample2