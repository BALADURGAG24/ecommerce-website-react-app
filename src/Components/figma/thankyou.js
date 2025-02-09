import React, { Component } from 'react';
import './thankyou.css';
import { Link } from 'react-router-dom';
class  Thankyou extends Component {
render() {
  
  return (
  <div className='tbg'>
    <div className='tbg1'>Thank you for the purchase!!!
    your order will be delivered within 2 days</div>
    
    <div className='yas'><Link to="/"><button>back to home</button></Link></div>
  </div>
  
  );
}
}

export default Thankyou;