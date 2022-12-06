import React from 'react'

function Child(props) {

  return (<>
    <h1>Name: {props.name}</h1>
    <h1>Surname: {props.surname}</h1>
    <h1>Age: {props.age}</h1>
  </>)
}

export default Child