import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './sony.css';
import { Link } from 'react-router-dom';

class  Sony extends Component {
render() {
  
  return (
  <div className='bg14'>
  <form>
  <img class="logo14" src="sonyl.png"></img>
  <br></br><br></br>
  <img class="product14"src="sony1.png"></img>
 <div class="pricetag14"> ₹1,28,990.00


</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div className='bks9'>
 <div class="info14">
 <br></br>
 <ul type="circle">
 <li>Sony E-mount lensesE-mount</li><br></br>
<li>35 mm sensor</li><br></br>
<li>Approx. 24.3 megapixels</li><br></br>
<li>Anti-Dust System</li><br></br>
<li>Charge protection coating on optical filter and<br></br> image sensor shift mechanism</li><br></br>
<li>35 mm full-frame (35.8 x 23.9 mm) Exmor™ CMOS sensor</li><br></br>
<li>Image Sensor Aspect ratio  3:2</li><br></br>
<li>Approx. 24.7 megapixels with 13 modes</li><br></br>
<br></br>
</ul></div></div>
<div class="name14">Sony Alpha ilce-7m2k 
</div>
<video class="video14" src="sony.mp4"></video>
<div class="click14"><Link to="pay">Buy Now</Link></div>

  </form>
  </div>
  
  );
}
}

export default Sony;