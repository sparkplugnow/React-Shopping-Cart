import React from "react";
import ItemList from "../Item-list/Item-list";
const cart = props => {
  return (
    <div className="container">
      <ItemList list={props.list} clicked={(id) => props.clicked(id)} btn="Remove from Cart" />
    </div>
  );
};

export default cart;
