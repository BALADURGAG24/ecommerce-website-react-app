import React, { Component } from 'react';
import './paybyn.css';
import { Link } from 'react-router-dom';

function next1(){

  if(document.querySelector(".oc1sb").checked){
    window.location.pathname='/sbi'
  }
  if(document.querySelector(".ic").checked){
    window.location.pathname='/icic'
  }
 
}

class Paybyn extends Component {
  
render() {
  
  return (
   <div className='paybybg'>
   <div className='bxs1'>
   <div className='bxs2'><div className='pp'>Payment Method</div></div>
   <div className='so'>
    <div className='oc1'><input className='oc1sb' type="radio" name="0c1"></input><label>State Bank of India</label></div>
    <label><img className='sbi' src="sbil.png"></img></label><br></br>
    <div className='oc2'><input className='oc1 ic' type="radio" name="0c1" ></input>
    <label>ICIC</label></div><br></br><label><img className='icic1' src="ii.png"></img></label><br></br>
    <div className='bt1'><button  onClick={next1}>next</button></div>
   </div>
   </div>
   </div>
   
  );
}
}

export default Paybyn;