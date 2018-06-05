import React from 'react'
import Item from './Items/Items';

const Itemlist = (props) => {
    
    return (
        <div className="row">
            {props.list.map((item, index) => {
                return (<Item 
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    key={item.id}
                    click={() => props.clicked(item.id)}
                    total={props.total}
                    btn={props.btn}/>)
            })}
        </div>
    )

}

export default Itemlist;