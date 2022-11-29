import React, { useState } from 'react'

function IfElseStateSample() {

    const [userOnline, setuserOnline] = useState(false)

    return (<>
        {
            userOnline == true ? <h1>User Online</h1> : <h1>User Offline</h1>
        }
        <button onClick={() => setuserOnline(!userOnline)}>Change User Status</button>
    </>
    )
}

export default IfElseStateSample