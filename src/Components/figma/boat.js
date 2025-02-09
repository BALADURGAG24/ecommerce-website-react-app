import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './boat.css';
import { Link } from 'react-router-dom';

class  Boat extends Component {
render() {
  return (
  <div className="bg4">
  <div className='bo'>
  <img class="logo4" src="boatl.png"></img>
  <br></br><br></br>
  <img class="product4"src="bs.webp"></img>
 <div class="pricetag4">₹ 1,990.00


</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br>
<div className='bt3'>
 <div class="info4">
 <br></br>
 <ul type="circle">
 <li> Sleek. Comfortable. Stylish. And a Splash of Incredible Colours.</li><br></br>

<li>Bring alive your favourite sounds with tws Equipped with 13mm drivers for <br></br>the magical boAt signature sound.</li><br></br>

<li>Designed for supreme ease with Insta Wake N’ Pair technology that auto connects<br></br>the moment it’s out of the case and Type C Charging.</li><br></br>

<li>Clear Voice Calls- Be heard clear across voice calls without those usual interruptions,<br></br> with the ENx Tech.</li><br></br>

<li>ASAP Charge- Our ASAP Charge feature that lets the earbuds garner up to 180 minutes of<br></br> playtime in just 10 minutes of charging.</li>
<br></br>
</ul></div></div>
<div class="name4">Boat Airdopes 190
</div>
<video class="video4" src="boat.mp4"></video>
<div class="click4"><Link to="pay">Buy Now</Link></div>
</div>

  </div>
  )
}
}

export default Boat;