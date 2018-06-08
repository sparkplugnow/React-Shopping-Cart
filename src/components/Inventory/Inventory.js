import React from "react";
import ItemList from "../Item-list/Item-list";
const Inventory = props => {
  return (
    <div className="container">
        <p></p>
      <ItemList total="false" list={props.list} clicked={props.clicked} btn="Add to Cart" />
    </div>
  );
};

export default Inventory;
