import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './jbl.css';
import { Link } from 'react-router-dom';

class  Jbl extends Component {
render() {
  return (
    <div className="bg8">
  <form>
  <img class="logo8" src="jbl logo 3.png"></img>
  <br></br><br></br>
  <img class="product8"src="jbl.png"></img>
 <div class="pricetag8">₹ 3,499.00

</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br>
 <div className='bk6'>
 <div class="info8">
 <br></br>
 <ul type="circle8">
 <li> Zero distractions when it's time to focus on your studies or get your
      groove on from these Bluetooth earbuds.<br></br> And you want to hear the world around you without removing
      your earbuds, Smart Ambient sharpens <br></br>the sounds of your surroundings.</li><br></br>

<li>   These Bluetooth earphones feature to
       7 hours of playback plus 21 hours in the case and JBL Live Pro+ TWS Speed. </li><br></br>

<li>Charge means your audio stays with you all day long. Power up super easily on the go with JBL Live Pro+.</li><br></br>

 <li>TWS Speed Charge and Qi-compatible wireless charging.</li><br></br>
</ul></div></div>
<div class="name8"> JBL wave 200 tws
</div>
<video class="video8" src="jbl.mp4"></video>
<div class="click8"><Link to="pay">Buy Now</Link></div>
  </form>
  </div>
 
  )
}
}

export default Jbl;