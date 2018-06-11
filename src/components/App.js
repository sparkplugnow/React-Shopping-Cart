import React, {Component} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleItems from '../sample-fishes';
import Items from './Items';

class App extends Component{
    constructor(){
        super();

        this.addItem = this.addItem.bind(this);
        this.loadSample = this.loadSample.bind(this);
        //getInitialState
        this.state = {
            items: {},
            order: {}
        };
    }


    addItem(item){
        //update state
        const items = {...this.state.items}

        //Add Timestamp
        const timestamp = Date.now();
        items[`item-${timestamp}`] = item;

        //setState
        this.setState({items});

    }

    loadSample(){

        //setState
        this.setState({
            items: sampleItems
        })
    }
    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Fish Cruz" />
                    <ul>
                    {
                        Object
                        .keys(this.state.items)
                        .map(key => <Items key={key} details={this.state.items[key]}/>)
                    }
                    </ul>
                </div>
                <Order />
                {/*add properties for child Components*/}
                <Inventory addItem={this.addItem} loadSample={this.loadSample} />
            </div>

        );
    };
}

export default App;
