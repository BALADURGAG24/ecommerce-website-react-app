import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './amazon.css';
import { Link } from 'react-router-dom';

class  Amazon1 extends Component {
render() {
  
  return (
    <div className="bg1">
  <img class="logo1" src="amazon logo 2.png"></img>
  <br></br><br></br>
  <img class="product1"src="amazon.png"></img>
 <div class="pricetag1">₹ 2,040.93
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>

 <div class="info1">
 <br></br>
 <div className="gg">
 <br></br>
 <ul type="circle">
 <li>Echo Dot is a smart speaker that can be operated by voice - even from distance.<br></br> Alexa can speak both
     English & Hindi, and new features are added automatically</li><br></br>

<li>Echo Dot (4th Gen) with clock has a new spherical design and improved bass performance<br></br> compared
      to Echo Dot (3rd Gen)</li><br></br>

<li>Comes with an LED display that shows time, outdoor temperature or timers. Tap the top to snooze.</li><br></br>

 <li>The light sensor automatically adjusts the display’s brightness, day or night.</li><br></br>

<li>Hands-free music control: Stream millions of songs in your favorite language from <br></br>Amazon Prime Music,
     Spotify, JioSaavn, Gaana, or Apple Music</li><br></br>
</ul></div></div>
<div class="name1"> Amazon Echo Dot 5th gen
</div>
<video class="video1" src="amazon.mp4"></video>
<div class="click1"><Link to="pay">Buy Now</Link></div>
  </div>
  );
}
}

export default Amazon1;