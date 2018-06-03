import React, {Component} from 'react';

import './App.css';
import Inventory from '../components/Inventory/Inventory';

class App extends Component {
    state = {
        inventory: [
            {id: "one", name: "fish", price: 50, quantity: 5},
            {id: "two", name: "rice", price: 50, quantity: 4},
            {id: "three", name: "beans", price: 70, quantity: 3}
        ],
        cart: [],
        showCart: false
    };

    render() {
        let items = null;
        if (this.state.showCart) {
            items = this.state.cart
        } else {
            items = <Inventory list={this.state.inventory} />
        }

        return (
            <div>
                <h1 className="text-center">Hi, Welcome to our shop</h1>
                {items}
            </div>
        )
    }
}

export default App;
