import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './nikon.css';
import { Link } from 'react-router-dom';

class Nikon extends Component {
render() {
  
  return (
    <div className="bg10">
  <form>
  <img class="logo10" src="nikon logo2.png"></img>
  <br></br><br></br>
  <img class="product10"src="nikon cam.png"></img>
 <div class="pricetag10"> ₹1,48,800.

</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div className='y'>
 <div class="info10">
 <br></br>
 <ul type="circle">
<li>Mount Type. Nikon Z Mount.</li><br></br>
<li>Focal Length Range. 24 - 200mm.</li><br></br>
<li>Zoom Ratio. 8.3x.</li><br></br>
<li>Maximum Aperture. f/ 4-6.3.</li><br></br>
<li>Minimum Aperture. f/ 22-36.</li><br></br>
<li>Format. FX.</li><br></br>
<li>Maximum Angle of View (DX-format) 61˚</li><br></br>
<li>Minimum Angle of View (DX-format) 8°</li><br></br>
</ul></div></div>
<div class="name10">Nikon z-24 200 camera
</div>
<video class="video10" src="nikon.mp4"></video>
<div class="click10"><Link to="pay">Buy Now</Link></div>


  </form>
  </div>
 
  );
}
}

export default Nikon;