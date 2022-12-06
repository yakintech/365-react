import React from 'react'
import Child from './Child'
import Child2 from './Child2'

function Parent() {

    let user = {
        name: "Aykut",
        surname: "Yılmaz",
        onlineStatus : false
    }

    let cities = ["İstanbul", "Ankara", "İzmir"] 

    return (<>
        <h1>This is Parent Component</h1>
        <Child name='Çağatay' surname='Yıldız' age={18}></Child>
        <Child2 webUser={user} cities={cities}></Child2>
    </>
    )
}

export default Parent