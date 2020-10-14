import React from 'react';

const OrderTest = ({sin}) => {
    console.log(sin._id)
    return (
        <div>
            <p> {sin._id} </p>
        </div>
    );
};

export default OrderTest;