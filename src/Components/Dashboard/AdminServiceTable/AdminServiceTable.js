import React from 'react';

const AdminServiceTable = ({ order }) => {
    return (
        <tr>
            <td> {order.name} </td>
            <td> {order.email} </td>
            <td> {order.service} </td>
            <td> {order.message} </td>
            <td> {order.status} </td>
        </tr>
    );
};

export default AdminServiceTable;