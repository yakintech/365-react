import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Todos() {

    const [todos, settodos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                settodos(data);
            })

    }, [])

    const goToDetail = (id) => {
        navigate(`/todos/${id}`)
    }

    return (<>
        <ul>
            {
                todos.map((item) => {
                    return <li key={item.id}>
                        <Link to={'/todos/' + item.id}>{item.title}</Link> 
                        <button onClick={() => goToDetail(item.id)}>Go To Detail</button>
                    </li>
                })
            }
        </ul>

    </>
    )
}

export default Todos