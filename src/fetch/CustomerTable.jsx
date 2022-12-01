import React, { useEffect, useState } from 'react'

function CustomerTable() {

    const API_URL = 'https://northwind.vercel.app/api/customers'
    const [customers, setCustomers] = useState([]);
    const [searchByName, setsearchByName] = useState('');
    const [originalData, setoriginalData] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);


    const getCustomers = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
                setoriginalData(data);
            })
    }


    const deleteCustomer = (id) => {

        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                getCustomers();
            })

    }

    const search = () => {
        let filteredCustomers = originalData
        .filter(q => q.companyName.toLowerCase().includes(searchByName.toLowerCase()));

        setCustomers(filteredCustomers);
    }

    return (<>
        <div>
            <label>Search: </label>
            <input type='text' onKeyUp={() => search()} onChange={(e) => setsearchByName(e.target.value)} />
            {/* <button onClick={() => search()}>Search</button> */}
        </div>
        <hr></hr>
        <table className='w3-table-all'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Concact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default CustomerTable