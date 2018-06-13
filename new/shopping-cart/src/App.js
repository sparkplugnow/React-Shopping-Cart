import React, { Component } from 'react';
import Title from './components/title';
import Items from './components/items';
import Cart from './components/cart';
import Itemlist from './components/itemlist';
import './App.css';
import './items.css';

var a = 0;

class App extends Component {
  constructor(){
    super();
 this.state = {
   pick: []
}
}

componentWillMount(){
  this.setState({
    pick:[]
  });
}

handleitems(e){  
  let pick = this.state.pick;
  pick.push(e);
  this.setState({pick:pick});
}

handleDeleteItem(id){
  let pick = this.state.pick;
  let index = pick.findIndex(x => x.id === id);
  pick.splice(index, 1);
  this.setState({pick:pick});
}

  render() {
    return (
      <div className="App">
          <Title />
            <br />
          <Items addItem={this.handleitems.bind(this)} /> 
            <br />
          <Cart />
          <Itemlist 
            itemlist={this.state.pick}
            onDelete={this.handleDeleteItem.bind(this)}
           />
      </div>
    );
  }
}

export default App;
