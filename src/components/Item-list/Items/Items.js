import React from 'react';

const items = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Price: ${props.price}</p>
                <p className="card-text">Quantity: {props.quantity}</p>
                <a href="#" className="btn btn-primary">{props.btn}</a>
            </div>
        </div>
    )

}

export default items;