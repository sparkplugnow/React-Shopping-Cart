import React , {Component} from 'react';
import {formatPrice} from '../helpers';

class Items extends Component{
    render(){
        const {details} = this.props
        return(
            <li className="menu-fish">
                <h3 className="fish-name">
                    {details.name}
                </h3>
                <span className="price">{formatPrice(details.price)}</span>
                <p>{details.desc}</p>
                <button>Add to Order</button>
            </li>
        )
    }
}

export default Items;