import React, { Component } from 'react';
import './payby.css';


function next(){

  if(document.querySelector(".db").checked){
    window.location.pathname='/paybyd'
  }
  
  else if(document.querySelector(".cd").checked){
    window.location.pathname='/cash'
  }
  else if(document.querySelector(".nb").checked){
    window.location.pathname='/paybyn'
  }
}

class Payby extends Component {
  
render() {
  
  return (
   <div className='paybybg'>
   <div className='bxs1'>
   <div className='bxs2'><div className='pp'>Payment Method</div></div>
   <div className='so'>
    <div className='oc1'><input className='oc1 cd' type="radio" name="0c1"></input>
    <label>Cash on Delivery</label></div><br></br>
    
    <div className='oc3'><input className='oc1 db' type="radio" name="0c1" ></input>
    <label>Pay by Debit Card</label></div><br></br>
    <div className='oc4'><input className='oc1 nb' type="radio" name="0c1" ></input>
    <label>Pay by net banking</label></div><br></br></div>
    <div className='bt1'><button  onClick={next}>next</button></div>
   </div>
   </div>
  );
}
}

export default Payby;