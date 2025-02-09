import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './canon.css';
import { Link } from 'react-router-dom';

class  Canon extends Component {
render() {
  
  return (
  <div className="bg5">

  <img class="logo5" src="canon logo.png"></img>
  <img class="product5"src="canon1.png"></img>
 <div class="pricetag5">₹ 1,25,500.00
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br>
 <div class="bt4">
 <div class="info5">
 <br></br>
 <ul type="circle"><li>Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for<br></br> large prints and image cropping).</li><br></br> 

<li>Transmission frequency
(central frequency):Frequency: 2 412 to 2 462MHz. <br></br>Standard diopter :-2.5 - +0.5m-1 (dpt)</li><br></br>

<li>ISO: 100-6400 sensitivity range</li><br></br>

<li>Image Processor: DIGIC 4+ with 9 autofocus points (important for speed and<br></br> accuracy of autofocus and burst photography)</li><br></br>

<li>Video Resolution: Full HD video with fully manual control and selectable frame rates</li><br></br>

<li>Connectivity: WiFi, NFC and Bluetooth built-in (useful for remotely controlling your camera)</li><br></br>
</ul></div></div>
<div class="name5">Canon eos 90d dslr camera
</div>
<video class="video5" src="canon.mp4"></video>
<div class="click5"><Link to="pay">Buy Now</Link></div>
</div>
  );
}
}

export default Canon;