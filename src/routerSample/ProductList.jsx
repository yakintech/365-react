import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductList() {

    const [products, setproducts] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])


    return (<>
        <ul>
            {
                products.map((item) => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>)
}

export default ProductList