import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './skullcandy.css';
import { Link } from 'react-router-dom';

class  Skull extends Component {
render() {
  return (
  
  <div className='bg13'>
  <img class="logo13" src="skull candy logo 2.png"></img>
  <br></br><br></br>
  <img class="product13"src="skull.png"></img>
 <div class="pricetag13">₹7,499.00

</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className='bsk'>
 <div class="info13">
 <br></br>
 <ul type="circle">
 <li>Digital Active Noise Cancellation</li><br></br>

<li>Wireless Charging Case, Personal Sound via Skullcandy App</li><br></br>

<li>Up to 32 Hours of Total Battery Life</li><br></br>

<li>Find your Earbuds with Tile</li><br></br>

<li>Full Media Controls on Each Bud</li><br></br>
</ul></div></div>
<div class="name13"> Skullcandy Indy</div>
<video class="video13" src="skull.mp4"></video>
<div class="click13"><Link to="pay">Buy Now</Link></div>
</div>
  );
}
}

export default Skull;