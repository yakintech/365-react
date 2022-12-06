import React from 'react'
import { useParams } from 'react-router-dom'

function ToDoDetail() {

    let { id } = useParams();

    return (
        <div>ToDoDetail - {id}</div>
    )
}

export default ToDoDetail