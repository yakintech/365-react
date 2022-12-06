import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ToDoDetail() {

    const navigate = useNavigate();
    let { id } = useParams();

    const goToBack = () => {
        navigate(-1);
    }

    const [todo, settodo] = useState({});

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(data => {
                settodo(data);
            })

    }, [])



    return (<>
        <button onClick={() => goToBack()}>Back</button>
        <div><h1>Detail</h1></div>
        <div>Title - {todo.title}</div>
        <div>Id - {todo.id}</div>
        <div>User Id - {todo.userId}</div>

    </>
    )
}

export default ToDoDetail