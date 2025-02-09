import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './guide.css';
import { Link } from 'react-router-dom';

class Guide extends Component {
render() {
  
  return (
    <div className='guidebg'>
        <div className='conn1'>
        <div className='bb1'>
        <h1>Buying Guidelines</h1>
        <br></br><br></br><br></br><br></br>
        Our company will not force customers for buying these products all is accroding to customers own interest.we have a
really good products  But before you buy, check out our shopping advice for everything from cell phones and digital cameras to video cards and wireless routers.There's nothing like a fresh calendar page to make your aging tech look even older. Didn't get that iPhone 5s on your holiday wish list? Ready to finally bid farewell to that barely breathing laptop? Printer spitting out its last pages? Now's a great time to score deals on all sorts of technology products as both brick-and-mortar and online retailers slash prices to move stock and make room for next year's models.
But you shouldn't buy blindly. Here in the PC Labs, we test, rate, and review thousands of products each year, and we dispense handy shopping advice on all of them. Below you'll find links to our products, telling you exactly what you need to look for when you shop for a particular type of product. All you need to find the right technology to start the new year is right here.<br></br>Thanking you.
<div className='bok'><Link to="/"><button>Ok</button></Link></div>
</div>
        </div>
    </div>
   
  );
}
}

export default Guide;