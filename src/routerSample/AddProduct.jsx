import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function AddProduct() {

    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [stock, setstock] = useState('');

    const navigate = useNavigate();

    
    const add = () => {
        let newProduct = {
            name: name,
            unitPrice: price,
            unitsInStock: stock
        }

        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then((res) => {
                navigate('/productlist')
            })
    }

    return (<>
        <div>
            <label>Name</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Price</label>
            <input type='text' onChange={(e) => setprice(e.target.value)} />
        </div>
        <div>
            <label>Stock</label>
            <input type='text' onChange={(e) => setstock(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
    </>
    )
}

export default AddProduct