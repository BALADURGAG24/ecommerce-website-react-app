import React, { Component } from 'react';
import './paybyd.css';
import { Link } from 'react-router-dom';

class Paybyd extends Component {
render() {
  
  return (
    <form>
    <div className='paybg'>
    <div className='container'>
    <img className="vs" src="vs.png"></img>
    <div className='p'>Payment details</div>
    <img className='mc' src="mc.png"></img>
    <div className='p1'>CVC/CW:<br></br>
    <input className='b3' type="text" name="ch" ></input></div>
    <div className='p2'>Expiration:<br></br>
    <input className='b2' type="text" name="cn" ></input></div>
    <div className='p3'>Card number:<br></br>
    <input className='b4' type="text" name="exp" ></input></div>
    <div className='p4'>Card Holder Name:<br></br>
    <input className='b1' type="password" name="cw" ></input></div>
    <div className='cont2'>
      <img className='img' src="cc.png"></img>
    <div className='paydb'>
    <Link to="/thankyou"><button>Submit</button></Link></div>
    </div>
    </div>
    </div>
    
    </form>
  );
}
}

export default Paybyd;