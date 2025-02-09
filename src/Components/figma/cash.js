import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './cash.css';
function paysbi(){
    
  window.location.pathname='/thankyou'
}
class  Cash extends Component {
render() {
  
  return (
    <div className="ccc">
   <div className='barrr'><img className='cas' src="cod1.png"></img>
<input className='sbb11' type='text' placeholder='Usename'></input>
<input className='sbb22' type='number' placeholder='OTP'></input>
<input className='sbb33' type='text' placeholder='Address'></input>
<div className='paysb11'><button onClick={paysbi}>Pay Now</button></div>
    </div>
  
  </div>
  );
}
}

export default Cash;