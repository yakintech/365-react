import React from 'react'

function Child2({ webUser, cities }) {

    return (
        <>
            <h1>{webUser.name}</h1>
            <h1>{webUser.surname}</h1>
            <h1>{webUser.onlineStatus}</h1>
            <ul>
                {
                    cities.map((item, key) => {
                       return <li key={key}>{item}</li>
                    })
                }
            </ul>


        </>)
}

export default Child2