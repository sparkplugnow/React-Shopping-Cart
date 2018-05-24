import React, { Component } from 'react';
import './App.css';
import Costumer from "./shop/customer"
import "./shop/shop.css";

class Apptwo extends Component {
    state = {
        costumerState : [
            {id:"done", good:"yam", price:"$30"},
            {id:"dtwo", good:"plantain", price:"$70"},
            {id:"dthree", good:"beans", price:"$300"},
            {id:"dfour", good:"rice", price:"$500"},
          ],
          showItems : false
    }
    deleteItemHandler = (itemIndex) => {
        const costumerState = this.state.costumerState.slice();
        costumerState.splice(itemIndex, 1);
        this.setState({costumerState: costumerState})
      }
    toggleItemsHandler = () => {
        const doesShow = this.state.showItems;
        this.setState({showItems:!doesShow})
      }
    render (){
        let mycart = null;
        if (this.state.showItems ){
            mycart = (
                <div>
                {this.state.costumerState.map((theitem,index) => {
                return <Costumer
                click = {() => this.deleteItemHandler(index)}
                mygood = {theitem.good}
                myprice = {theitem.price}
                key = {theitem.id  }
          />
        })}
        
      </div>
      );
    }
        return (
            
                <div>
                    <button 
                    onClick={this.toggleItemsHandler}>My cart</button>
                    {mycart}
                </div>
              )
    }
}
export default Apptwo;