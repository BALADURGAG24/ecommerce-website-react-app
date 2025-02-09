import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './samsung2.css';
import { Link } from 'react-router-dom';

class Samsung1 extends Component {
render() {
  
  return (
     <div className='bxxs'>
     <div className='bg11'>
  <img class="logo11" src="sam logo.png"></img>
  <br></br><br></br>
  <img class="product11"src="samwatch.png"></img>
 <div class="pricetag11">₹ 27,999.00</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className='bk8'>
 <div class="info11">
 <br></br>
 <ul type="circle">
 <li>Sleep Tracking: Know your sleep with our new and improved sleep tracking technology,<br></br>
      Plan your bedtime, detect snoring, understand and track your sleep.</li><br></br>

 <li>percentage (BIA) to skeletal muscle weight. All feedback you need to track your progress.</li><br></br>

<li>Optical Heart Rate Sensor: Monitor your heart rate and track your cardiovascular health.</li><br></br>

<li>Fitness Tracking: Every step counts. Your watch will automatically detect physical activity
     counting your steps,<br></br> calories, and even your routines. (supports over 90 exercises).</li><br></br>
</ul></div></div>
<div class="name11">Samsung galaxy watch 5</div>
<video class="video11" src="samsung2.mp4"></video>
<div class="click11"><Link to="pay">Buy Now</Link></div>
</div>
<div className='bks'>
<img class="logo110" src="sam logo.png"></img>
  <br></br><br></br>
  <img class="product110"src="Samph.png"></img>
 <div class="pricetag110">₹ ₹ 1,19,900.00</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className='bk9'>
 <div class="info110">
 <br></br>
 <ul type="circle">
 <li>The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text
      and<br></br> <br></br>use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen
      stroke feel as natural as ink on paper </li><br></br>

<li>5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever.That means, a faster</li><br></br>

<li>CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.</li><br></br>

<li>The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.</li><br></br>

</ul></div></div>
<div class="name110">Samsung S22 ultra</div>
<video class="video110" src="galaxy s22.mp4"></video>
<div class="click110"><Link to="pay">Buy Now</Link></div>
</div>
</div>
  
  );

}
}

export default Samsung1;