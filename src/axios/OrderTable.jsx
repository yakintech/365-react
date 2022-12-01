import React, { useEffect, useState } from 'react'
import axios from 'axios'

function OrderTable() {

  const API_URL = 'https://northwind.vercel.app/api/orders'
  const [orders, setorders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);


  const getOrders = () => {

    axios.get(API_URL)
      .then(res => {
        setorders(res.data);
      })
  }

  const deleteOrder = (id) => {

    axios.delete(`https://northwind.vercel.app/api/orders/${id}`)
      .then(res => {
        getOrders(); 
      })

  }


  return (<>
    <table className='w3-table w3-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Ship Name</th>
          <th>Order Date</th>
          <th>Shipped Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.shipName}</td>
              <td>{item.orderDate}</td>
              <td>{item.shippedDate}</td>
              <td><button onClick={() => deleteOrder(item.id)} className='w3-button w3-red w3-hover-black'>Delete</button></td>
            </tr>
          })
        }
      </tbody>
    </table>
  </>)
}

export default OrderTable