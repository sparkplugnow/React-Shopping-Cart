import React, {Component} from 'react';

class AddForm extends Component{
    createItem(event){
        event.preventDefault();
        console.log('Gonna make an item');
        const Item = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value
        }
        this.props.addItem(Item);
        this.itemForm.value = ''; //Don't know how to clear the form values
    }

    render(){
        return(
            <form ref={(input) => this.itemForm =input} className="fish-edit" onSubmit={(e) => this.createItem(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Item Name"/>
                <input ref={(input) => this.price = input} type="text" placeholder="Item Price"/>
                <select ref={(input) => this.status = input} id="">
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out!</option>                
                </select>
                <textarea ref={(input)=> this.desc = input} placeholder="Item Decription" />
                <button type="submit"> +Add Item</button>
            </form>

        )
    }
}

export default AddForm;