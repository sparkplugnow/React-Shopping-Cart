import React, { Component } from 'react';

const  itemArray = {
  litem: [
    {
      id: 1,
      iname: 'GIONEE X15',
      cost: 37900,
      quantity: 2,
      buttonActive: true
    },
    {
     id: 2,
     iname: 'INFINIX Hot S3',
     cost: 60500,
     quantity: 3,
     buttonActive: true
   },
   {
     id: 3,
     iname: 'X9000 OMEN Mouse',
     cost: 13500,
     quantity: 1,
     buttonActive: true
   },
   {
     id: 4,
     iname: '4GB Graphic Card',
     cost: 41990,
     quantity: 2,
     buttonActive: true
   },
   {
     id: 5,
     iname: 'THOMAS T-bag',
     cost: 15000,
     quantity: 1,
     buttonActive: true 
   },
   {
     id: 6,
     iname: 'Lace-up Sneakers',
     cost: 15000,
     quantity: 3,
     buttonActive: true
   }
 ]
}

class Items extends Component {
  constructor(){
    super();
    this.state = {
      selectedItem:{}
    }
  }


   handleItems(e){  
     e = e || window.event;
     e = e.target || e.srcElement;
     
      if(1>6){
        console.log("good");
      } else {
        this.setState({
          selectedItem: {
          id: itemArray.litem[e.id].id,
          quantity: itemArray.litem[e.id].quantity,
          iname: itemArray.litem[e.id].iname,
          cost: itemArray.litem[e.id].cost
        }}, function(){
       //console.log(this.state.selectedItem);
       this.props.addItem(this.state.selectedItem);
       if(e.id === "0"){
         --itemArray.litem[e.id].quantity;
       }
       if(e.id === "1"){
        --itemArray.litem[e.id].quantity;
      }
      if(e.id === "2"){
        --itemArray.litem[e.id].quantity;
      }
      if(e.id === "3"){
        --itemArray.litem[e.id].quantity;
      }
      if(e.id === "4"){
        --itemArray.litem[e.id].quantity;
      }
      if(e.id === "5"){
        --itemArray.litem[e.id].quantity;
      }
       })}
       if(itemArray.litem[e.id].quantity===1){
       itemArray.litem[e.id].buttonActive = false;
       itemArray.litem[e.id].quantity=0
       }
    }
  

  render() {
   
    return (
      <div className="Item">
         <div className="Item-1">
           <b>Name:</b> GIONEE X15
           <p><b>Specifications:</b> <br />
           <b>-</b> 4000mAh Battery <br />
           <b>-</b> 3GB RAM + 32GB ROM <br />
           <b>-</b> Andriod 7.0 System </p>
           <b>Cost:</b> &#8358;37,900 <b>| Quantity:</b> {itemArray.litem[0].quantity}<br />
          <p>{itemArray.litem[0].buttonActive ? 
          <input type='submit'  className="button" id="0" onClick= {this.handleItems.bind(this)} value="Add To Cart" />:
            <input type="submit" className="buttonDisabled" value="Sold Out" disabled />
        } </p>
         </div>
         <div className="Item-2">
           <b>Name:</b> INFINIX Hot S3
           <p><b>Specifications:</b> <br />
           <b>-</b> Andriod OS v8.0 <br />
           <b>-</b> Fingerprint Scanner <br />
           <b>-</b> 3GB RAM + 32GB ROM </p>
           <b>Cost:</b> &#8358;60,500 <b>| Quantity:</b> {itemArray.litem[1].quantity}<br />
           <p>{itemArray.litem[1].buttonActive ? 
           <input type='submit' className="button" id="1" onClick={this.handleItems.bind(this)} value="Add To Cart" />:
           <input type="submit" className="buttonDisabled" value="Sold Out" disabled />
          } </p>
         </div>
         <div className="Item-3">
           <b>Name:</b> X9000 OMEN OMEN Mouse
           <p><b>Specifications:</b> <br />
           <b>-</b> Black <br />
           <b>-</b> 0.132(kg) <br />
           <b>-</b> Office "R" Us Ltd </p>
           <b>Costs:</b> &#8358;13500  <b>| Quantity:</b> {itemArray.litem[2].quantity}<br />
           <p>{itemArray.litem[2].buttonActive ? 
           <input type='submit' className="button" id="2" onClick={this.handleItems.bind(this)} value="Add To Cart" />:
           <input type="submit" className="buttonDisabled" value="Sold Out" disabled />
          }</p>
         </div>
         <div className="Item-4">
           <b>Name:</b> 4GB Graphic Card
           <p><b>Specifications:</b> <br />
           <b>-</b> Grey <br />
           <b>-</b> 1(kg) <br />
           <b>-</b> AMD Video Ddr5 VR </p>
           <b>Costs:</b> &#8358;41,990  <b>| Quantity:</b> {itemArray.litem[3].quantity}<br />
           <p>{itemArray.litem[3].buttonActive ?
           <input type='submit' className="button" id="3" onClick={this.handleItems.bind(this)} value="Add To Cart" />:
           <input type="submit" className="buttonDisabled" value="Sold Out" disabled />
          }</p>
         </div>
         <div className="Item-5">
           <b>Name:</b> THOMAS T-bag <br />
           <p><b>Specifications:</b> <br />
           <b>-</b> Black Hair <br />
           <b>-</b> Short <br />
           <b>-</b> Not Good On Bed </p>
           <b>Costs:</b> &#8358;15,000  <b>| Quantity:</b> {itemArray.litem[4].quantity}<br />
           <p>{itemArray.litem[4].buttonActive ? 
           <input type='submit' className="button" id="4" onClick={this.handleItems.bind(this)} value="Add To Cart" />:
           <input type="submit" className="buttonDisabled" value="Sold Out" disabled />
           }</p>
         </div>
         <div className="Item-6">
           <b>Name:</b> Lace-up Sneakers <br />
           <p><b>Specifications:</b> <br />
           <b>-</b> Easy Wear <br />
           <b>-</b> Easy To Maintain <br />
           <b>-</b> Lace Up </p>
           <b>Costs:</b> &#8358;15,000  <b>| Quantity:</b> {itemArray.litem[5].quantity}<br />
           <p>{itemArray.litem[5].buttonActive ? 
           <input type='submit' className="button" id="5" onClick={this.handleItems.bind(this)} value="Add To Cart" />:
           <input type="submit" className="buttonDisabled" value="Sold Out" disabled />
           }</p>
         </div>
      </div>
    );
  }
}

export default Items;