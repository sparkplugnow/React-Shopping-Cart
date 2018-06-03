import React from "react";
import ItemList from "../Item-list/Item-list";
const cart = props => {
    let totalPrice = 0;
    for (let i=0; i<props.list.length; i++) {
        totalPrice += props.list[i].price * props.list[i].quantity;
    }
  return (
    <div className="container">
        <p>Items in cart: {props.list.length}</p>
        <p>Total price: ${totalPrice}</p>
      <ItemList list={props.list} total="true" clicked={(id) => props.clicked(id)} btn="Remove from Cart" />
    </div>
  );
};

export default cart;
