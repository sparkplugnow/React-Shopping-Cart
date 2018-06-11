import React, {Component} from 'react';
import AddForm from './AddForm';

class Inventory extends Component{
    render(){
        return(
            <div>
                <h1> Inventory </h1>
                <AddForm addItem= {this.props.addItem}/>
                <button onClick={this.props.loadSample}>Load Sample Items</button>
            </div>
            
        )
    }
}

export default Inventory;