import React from "react";
const costumer = (props) => {

    return (
    <div className="ourcart">
        <p onClick={props.click}>i am buying{props.mygood} at {props.myprice} each</p>
    </div>
    )
};
export default costumer;