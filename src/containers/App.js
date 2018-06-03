import React, {Component} from 'react';

import './App.css';
import Inventory from '../components/Inventory/Inventory';
import Cart from '../components/Cart/Cart';

class App extends Component {
    state = {
        inventory: [
            {id: "one", name: "fish", price: 50, quantity: 5},
            {id: "two", name: "rice", price: 50, quantity: 4},
            {id: "three", name: "beans", price: 70, quantity: 3}
        ],
        cart: [],
        showCart: false,
    };

    addToCart = (id) => {
        const inventoryIndex = this.state.inventory.findIndex(p => {
            return p.id === id;
        });

        const inventoryItem = { ...this.state.inventory[inventoryIndex] };
        inventoryItem.quantity -= 1;
        const inventory = [...this.state.inventory];
        inventory[inventoryIndex] = inventoryItem;


        const cartIndex = this.state.cart.findIndex(c => {
            return c.id === id;
        });
        let cart = [ ...this.state.cart ];
        if (cartIndex >= 0) {
            const cartItem = { ...this.state.cart[cartIndex] };
            cartItem.quantity += 1;
            cart[cartIndex] = cartItem;
        } else {
            const cartItem = { ...inventoryItem };
            cartItem.quantity = 1;
            cart.push(cartItem);
        }
        this.setState({inventory: inventory, cart: cart, showCart: true})
    }

    removeFromCart = (id) => {
        const cartIndex = this.state.cart.findIndex(p => {
            return p.id === id;
        });

        const cartItem = { ...this.state.cart[cartIndex] };
        cartItem.quantity -= 1;
        const cart = [...this.state.cart];
        if (cartItem.quantity === 0) {
            cart.splice(cartIndex, 1);
        } else {
            cart[cartIndex] = cartItem;
        }
        


        const inventoryIndex = this.state.inventory.findIndex(c => {
            return c.id === id;
        });
        let inventory = [ ...this.state.inventory ];
        const inventoryItem = { ...this.state.inventory[inventoryIndex] };
        inventoryItem.quantity += 1;
        inventory[inventoryIndex] = inventoryItem;
    
        this.setState({inventory: inventory, cart: cart, showCart: false})
    }

    toggleCart = () => {
        const doesShow = this.state.showCart;
        this.setState({showCart: !doesShow});
    }

    render() {
        let items = null;
        let buttonText;
        if (this.state.showCart) {
            items = <Cart list={this.state.cart} clicked={this.removeFromCart} />
            buttonText = "Show Inventory"
        } else {
            items = <Inventory list={this.state.inventory} clicked={this.addToCart} />
            buttonText = "View Cart"
        }

        return (
            <div className="App">
                <h1>Hi, Welcome to our shop</h1>
                <button onClick={this.toggleCart} className="btn btn-primary">{buttonText}</button>
                {items}
            </div>
        )
    }
}

export default App;
