import React from 'react';
import ItemList from '../Item-list/Item-list';
const inventory = (props) => {
    return (
        <div className="container">
        <ItemList 
            list={props.list}/>
            </div>
    )
}

export default inventory;