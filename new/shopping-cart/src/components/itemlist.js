import React, { Component } from 'react';


class Itemlist extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }
  render() {
    let cart;
    let totalCost = 0;
   if(this.props.itemlist){ 
     cart = this.props.itemlist.map((x) => {
       return(
        <ul key={x.iname} className="Itemlist">
       <li>{x.iname} &nbsp;&nbsp;&nbsp;&#8358;{x.cost} &nbsp;&nbsp;<input type="submit" className="delete" onClick={this.deleteItem.bind(this, x.id)} value="X" /></li>
       </ul>
     )
    })}
     
    for( var i=0; i<this.props.itemlist.length; i++){
      totalCost += this.props.itemlist[i].cost
    }
    return (
    <div>
       <h3> {cart}</h3> <hr />
       <h1 className="total">Total:</h1> <h2 className="h2">&#8358;{totalCost}</h2>
      </div>
    );
  }
}

export default Itemlist;