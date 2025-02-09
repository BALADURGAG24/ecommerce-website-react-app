import React, { Component } from 'react';
import './sbi.css';

import { Link } from 'react-router-dom';
class Sbi extends Component {
  
render() {
  
  return (
    <div className='sbibg'>
<div className='barr'><img className='sb' src="sbil.png"></img>
<input className='sbb1' type='text'placeholder='Username'></input>
<input className='sbb2' type='password' placeholder='password'></input>
<input className='sbb3' type='number' placeholder='Amount'></input>
<div className='paysb1'><Link to="thankyou"><button>Pay Now</button></Link></div>
    </div>
</div>
   
  );
}
}

export default Sbi;