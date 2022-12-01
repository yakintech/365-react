import React, { useEffect, useState } from 'react'

function SupplierTable() {

    const [suppliers, setsuppliers] = useState([]);
    const [loading, setloading] = useState(true);
    const [isSortedAscCompanyName, setisSortedAscCompanyName] = useState(false);


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then(res => res.json())
            .then(data => {
                setsuppliers(data);
                setloading(false);
            })

    }, []);


    const sortByCompanyName = () => {

        if(!isSortedAscCompanyName){

            let sortedSuppliers = suppliers.sort((a,b) => a.companyName.localeCompare(b.companyName));

            setsuppliers([...sortedSuppliers]);

            setisSortedAscCompanyName(true);
        }
        else{
            let sortedSuppliers = suppliers.sort((a,b) => b.companyName.localeCompare(a.companyName));

            setsuppliers([...sortedSuppliers]);

            setisSortedAscCompanyName(false);
        }
    


    }



    return (<>
        {
            loading == true ? <span>loading...</span> : <table className='w3-table-all w3-centered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th style={{cursor:'pointer'}} onClick={() => sortByCompanyName()}>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers.map((item) => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        }

    </>
    )
}

export default SupplierTable