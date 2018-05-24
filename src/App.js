import React, { Component } from 'react';
import './App.css';
import Shop from "./shop/shop";
import "./shop/shop.css";

class App extends Component {
  state = {
    items : [
      {id:"one", good:"fish", price: "$50"},
      {id:"two", good:"rice", price: "$50"},
      {id:"three", good:"beans", price: "$50"}
    ]
    
  }
  
  render() {
    return (
      this.state.items.map(item =>{
        return (
          <div>
            <Shop        
            good = {item.good}
            price = {item.price} 
            />
          </div>
        )
      }
      )
        
    );
  }
}

export default App;
