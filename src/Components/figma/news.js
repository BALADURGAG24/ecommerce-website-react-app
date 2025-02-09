import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './news.css';

class News extends Component {
render() {
  
  return (
    <div className='nebg'>
    <div className='t1'><h1>News</h1></div>
    <div className='nw1'>
    <img className='nws1' src="s233.png"></img>
    
    <div className='ns1'>
    <br></br>
    The Samsung Galaxy S23 Ultra is probably the most anticipated flagship of 2023, scheduled to launch in February. While the device might look similar to its predecessor, it will be powered by the Snapdragon 8 Gen 2 SoC, making it one of the most powerful Android smartphones of 2023. Similarly, the device is also expected to offer improved camera performance and extended battery life when compared to the Galaxy S22 Ultra.
    </div>
    </div>
    <div className='nw2'>
    <img className='nws2' src="one.jpg"></img>
    <div className='ns2'>
    <br></br>
    OnePlus has officially confirmed that its next flagship OnePlus 11 will launch on February 7th in India. This device is powered by the Snapdragon 8 Gen 2 SoC and offers OnePlus-exclusive features like an alert slider and OxygenOS. The device has a Hasselblad-powered triple camera setup at the back and the smartphone is likely to feature a 2K AMOLED screen with a 120Hz refresh rate.
    </div>
    </div>
    <div className='nw3'>
    <img className='nws3' src="i15.jpg"></img>
    <div className='ns3'>
    <br></br>
    The Apple iPhone 15 Ultra is going to be the most technologically advanced smartphone that Apple has ever launched. It is said to feature a titanium body, and the device might even make use of a customised flagship processor. Even in terms of camera, the iPhone 15 Ultra is said to feature a periscope zoom lens, and it could even come with a 1-inch type wide-angle lens for improved low-light photography.

    </div>
    </div>


    </div>
    
 
  );
}
}

export default News;