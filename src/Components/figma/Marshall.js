import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './marshall.css';
import { Link } from 'react-router-dom';

class  Marshall extends Component {
render() {
  
  return (
  <div className='bg9'>
  <form>
  <img class="logo9" src="marshall logo 2.png"></img>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <img class="product9" src="marshall1.png"></img>
 <div class="pricetag9">₹ 11,999.00


</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className="bk7">
 <div class="info9">
 <br></br>
 <ul type="circle">
 <li> Cancel The Noise, Amplify The Sound: Set your own level of active noise cancellation
      and<br></br>Transparency for a truly personal listening experience</li><br></br>

<li>Sealed-Fit Earbuds For a Secure Fit: Comes with three ear-tip sizes so you can
     get the right fit and the right sound</li><br></br>

<li>Reliable Playtime With Wireless Charging: Each earbud holds 4.5 hours of wireless
     playtime with full A.N.C.<br></br>and the portable charging case provides 20 total
     hours of playtime on a single charge. 
     <br></br>Wireless charging also makes it even
     easier to charge and go</li><br></br>
</ul></div></div>

<div class="name9"> Marshall Minor III
</div>
<video class="video9" src="marshall.mp4"></video>
<div class="click9"><Link to="pay">Buy Now</Link></div>

  </form>
  </div>
  );
}
}

export default Marshall;