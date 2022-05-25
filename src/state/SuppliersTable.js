import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'

function SuppliersTable() {
    const [supplierList, setSupplierList] = useState(suppliers)
    const [searchByName, setSearchByName] = useState('');

    const removeAll = () => {
        setSupplierList([])
    }

    const removeItem = (id) => {
        let newSupplierList = supplierList.filter(item => item.id !== id);
        setSupplierList(newSupplierList)
    }


    const searchSuppliers = (data) => {
        let searchData = data.toLowerCase().trim();
        let newSuppliers = suppliers.filter(q => q.companyName.toLowerCase().includes(searchData));
        setSupplierList(newSuppliers);
    }


    const orderBy = () => {
        let sortSuppliers = supplierList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        setSupplierList([...sortSuppliers])
    }

    const orderByDesc = () => {
        let sortSuppliers = supplierList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fb < fa) {
                return -1;
            }
            if (fb > fa) {
                return 1;
            }
            return 0;
        });
        setSupplierList([...sortSuppliers])
    }

    const loadData = () => {
        setSupplierList(suppliers)
    }

    return (<>
        <div>
            <input type='text' onChange={(e) => searchSuppliers(e.target.value)} placeholder="Seacrh by name..." />
        </div>
        <div>
            <button onClick={() => orderBy()}>Order By</button>
            <button onClick={() => orderByDesc()}>Order By Desc</button>
            <button onClick={() => loadData()}>Load Data</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Company Name </th>
                    <th> Contact Name </th>
                    <th> Contact Title </th>
                    <th> Country </th>
                    <th> Phone </th>
                </tr>
            </thead>
            {supplierList && supplierList.map((item, key) => {
                return <tbody>
                    <tr key={item.id}>
                        <th> {item.id} </th>
                        <td> {item.companyName} </td>
                        <td> {item.contactName} </td>
                        <td> {item.contactTitle} </td>
                        <td> {item.address.city}</td>
                        <td> {item.address.phone} </td>
                        <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                    </tr>
                </tbody>
            })
            }
        </table>
        <div>
            <button onClick={() => removeAll()}>Remove All</button>
        </div>

    </>

    )
}

export default SuppliersTable