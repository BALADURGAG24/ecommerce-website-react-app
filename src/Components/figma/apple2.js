import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import { Link } from 'react-router-dom';
import './apple1.css';

class Iwatch extends Component {
render() {
 return (
      <div className='bg3'>
  <div className='box1'>
  <img class="logo3" src="apple logo5.png"></img>
  <br></br><br></br>
  <img class="product3"src="apple2.png"></img>
 <div class="pricetag3">₹89,900.00</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className='btt1'>
 <div class="info3">
 <br></br>
 <ul type="circle">
 <li>Specialized features, sensors, and three new bands designed for exploration, adventure,and endurance</li><br></br>
<li>49-millimetre aerospace-grade titanium case for an ideal balance of weight, strength and
      corrosion resistance</li><br></br>
<li>The largest, brightest Apple Watch display for improved legibility in all conditions</li><br></br>
<li>Up to 36 hours of battery life for normal use along with low-power settings for even longer battery life</li><br></br>
<li>Precision dual-frequency GPS system provides accurate location for calculating distance, pace,  and route maps</li><br></br>
</ul></div></div>
<div class="name3">Apple Watch Ultra
</div>
<video class="video3" src="iwatch.mp4"></video>
<div class="click3"><Link to="pay">Buy Now</Link></div>
</div>



      <div className='box2'>
      <img class="logo2" src="apple logo5.png"></img>
      <img className='product2' src="iphone2.png"></img>
      <br></br><br></br>
      <div className='bt2'>
      <div className="info2">
      <br></br>
            <ul type='circle'>
            <li>15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion</li><br></br>
<li>Dynamic Island, a magical new way to interact with iPhone</li><br></br>

<li>48MP Main camera for up to 4x greater resolution</li><br></br>

<li>Cinematic mode now in 4K Dolby Vision up to 30 fps</li><br></br>

<li>Action mode for smooth, steady, handheld videos</li></ul><br></br>
      </div></div>
      <div className="name2">Apple Iphone 14 pro max</div>
      <div className="pricetag2">₹1,39,900.00</div>
      <video className="video2" src="iphone.mp4"></video>
      <div className='click2'><Link to="pay">Buy Now</Link></div>
      </div>

      <div className='box3'>
      <img class="logoi3" src="apple logo5.png"></img>
      <img className='producti3' src="i3.png"></img>
      <br></br><br></br>
      <div className='bti3'>
      <div className="infoi3">
      <br></br>
            <ul type='circle'>
            <li>Apple M1 chip powers next-level performance and all-day battery life¹ footnote</li><br></br>
<li>27.69 cm (10.9-inch) Liquid Retina display delivers an immersive viewing experience footnote</li><br></br>
<li>12MP Ultra Wide front camera with Centre Stage for more natural video calls</li><br></br>
<li>Experience super-fast Wi-Fi with Wi-Fi 6</li><br></br>
<li>Compatible with Apple Pencil (2nd generation), Magic Keyboard and Smart Keyboard Folio footnote³</li></ul><br></br>

<div/></div></div>
      <div className="namei3">Apple Air ipad</div>
      <div className="pricetagi3">₹55,700.00</div>
      <video className="videoi3" src="i3.mp4"></video>
      <div className='clicki3'><Link to="pay">Buy Now</Link></div>
      </div>

 
      <div className='box4'>
      <img class="logoi4" src="apple logo5.png"></img>
      <img className='producti4' src="i4.png"></img>
      <br></br><br></br>
      <div className='bti4'>
      <div className="infoi4">
      <br></br>
            <ul type='circle'>
            <li>All-new strikingly thin design so you can work, play or create just about anything — anywhere
Get more done faster with the next-generation Apple M2 chip — and</li><br></br>
<li> go all day and into the night with up to 18 hours of battery life¹</li><br></br>
<li>34.46 cm (13.6-inch) Liquid Retina display with 500 nits of brightness makes text and images look brilliant, with vivid detail footnote</li><br></br>
<li>Everything looks sharp and sounds great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio
Fanless design means MacBook Air stays completely silent, no matter how intense the task</li>
    </ul><br></br></div>

<div/></div>
      <div className="namei4">Apple Mac book 13</div>
      <div className="pricetagi4">₹1,29,900.00</div>
      <video className="videoi4" src="i4.mp4"></video>
      <div className='clicki4'><Link to="pay">Buy Now</Link></div>

      </div>
      </div>     

 )
  

}
}

export default Iwatch;