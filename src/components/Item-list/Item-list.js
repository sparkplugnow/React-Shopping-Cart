import React from 'react'
import Item from './Items/Items';

const itemlist = (props) => {
    return (
        <div className="row">
            {props.list.map((item, index) => {
                return (<div className="col-md-4"><Item 
                    name={item.name}
                    price={item.price}
                    key={item.id}
                    quantity={item.quantity}
                    btn="Add to Cart"/></div>)
            })}
        </div>
    )

}

export default itemlist