import React from 'react'
import Item from './Items/Items';

const itemlist = (props) => {
    return (
        <div className="row">
            {props.list.map((item, index) => {
                return (<div key={item.id} className="col-md-4"><Item 
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    click={() => props.clicked(item.id)}
                    btn={props.btn}/></div>)
            })}
        </div>
    )

}

export default itemlist