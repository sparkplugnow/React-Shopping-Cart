import React from "react";
import ItemList from "../Item-list/Item-list";
const Cart = props => {
  
  const get_sum = (total, currentValue) => total + currentValue;
  
  const total_price = () => {
    let total_price_array = props.list.map(item => item.price * item.quantity);
    return total_price_array.reduce(get_sum, 0);
  }
  let totalPrice = total_price();

  return (
    <div className="container">
      <p>Items in cart: {props.list.length}</p>
      <p>Total price: ${totalPrice}</p>
      <ItemList
        list={props.list}
        total="true"
        clicked={id => props.clicked(id)}
        btn="Remove from Cart"
      />
    </div>
  );
};

export default Cart;
