import React from "react";
const shop = (props) => {

    return (
    <div className="ourcart">
        <p>Buy {props.good} at {props.price} each</p>
    </div>
    )
};

export default shop;