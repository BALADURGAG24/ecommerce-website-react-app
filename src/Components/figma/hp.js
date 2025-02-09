import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './hp.css';
import { Link } from 'react-router-dom';

class Hp extends Component {
render() {
 
  return (
  <div className="bg7">

  <img class="logo7" src="hp logo 1.png"></img>
  <br></br><br></br>
  <img class="product7"src="hp.png"></img>
 <div class="pricetag7">₹ 1,03,638.35
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <div className='bt5'>
 <div class="info7">
 <br></br>
 <ul type="circle">
 <li>Windows 11 Pro - HP recommends Windows 11 Pro for business</li><br></br>

<li>Intel® Core™ i5 processor</li><br></br>

<li>6 GB memory; 512 GB NVMe SSD</li><br></br>

<li>13.5" diagonal FHD display</li><br></br>

<li>Intel® Iris® Xe Graphics</li><br></br>
</ul></div></div>
<div class="name7"> HP Elite Dragonfly G3
</div>
<video class="video7" src="hp1.mp4"></video>
<div class="click7"><Link to="pay">Buy Now</Link></div>
  </div>
  )
}
}

export default Hp;