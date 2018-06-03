import React from 'react';

const items = (props) => {
    if(props.total === "true") {
       return ( 
           <div className="col-md-4">
       <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Price: ${props.price}</p>
                <p className="card-text">Total Price: ${props.price * props.quantity}</p>
                <p className="card-text">Quantity: {props.quantity}</p>
                <button onClick={props.click} className="btn btn-primary">{props.btn}</button>
            </div>
        </div></div>)
    } else {
        if (props.quantity === 0) {
            return (
                <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Price: ${props.price}</p>
                        <p className="card-text">Quantity: {props.quantity}</p>
                        <button disabled className="btn btn-primary">Sold Out</button>
                    </div>
                </div></div>
            )
        } else {
            return (
                <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Price: ${props.price}</p>
                        <p className="card-text">Quantity: {props.quantity}</p>
                        <button onClick={props.click} className="btn btn-primary">{props.btn}</button>
                    </div>
                </div></div>
            )
        }
        
    }
}

export default items;