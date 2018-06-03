import React, {Component} from 'react';

import './App.css';

class App extends Component {
    state = {
        inventory: [
            {id: "one", name: "fish", price: "$50", quantity: 5},
            {id: "two", name: "rice", price: "$50", quantity: 4},
            {id: "three", name: "beans", price: "$50", quantity: 3}
        ],
        cart: [],
        showCart: false
    };

    render() {
        let items = null;
        if (this.state.showCart) {
            items = this.state.cart
        } else {
            items = this.state.inventory
        }
    }
}

export default App;
