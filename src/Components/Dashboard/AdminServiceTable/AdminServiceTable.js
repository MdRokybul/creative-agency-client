import React, { useEffect } from 'react';
import { useState } from 'react';

const AdminServiceTable = ({ order }) => {

    const [serviceUpdate, setServiceUpdate] = useState({
        status: ''
    });
    console.log(serviceUpdate)

    const handleChange = (e) => {
        const newServiceUpdate = { ...serviceUpdate };
        newServiceUpdate.status = e.target.value;
        setServiceUpdate(newServiceUpdate);
    }

    useEffect(() => {
        if (serviceUpdate.status !== '') {
            fetch(`https://pure-castle-12905.herokuapp.com/update/${order._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(serviceUpdate)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }, [serviceUpdate])
    return (
        <tr>
            <td> {order.name} </td>
            <td> {order.email} </td>
            <td> {order.service} </td>
            <td> {order.message} </td>
            <td>
                <select onChange={handleChange} className="form-control" name="status" >
                    <option selected disabled={true}> {order.status} </option>
                    <option value="Pending">Pending</option>
                    <option value="On Going"> On Going </option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default AdminServiceTable;