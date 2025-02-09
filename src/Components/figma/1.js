import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './1.css';
import { Link } from 'react-router-dom';

class Is extends Component {
render() {
  return (
    <div className="bg0">
  <div class="navbar">
  <Link to="/review">Product Review</Link>
  <Link to="/news">News</Link>
  <div class="dropdown">
    <button class="dropbtn">Brand
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    
    <Link to="apple">Apple</Link>
       <Link to="dell">Dell</Link>
      <Link to="boat">Boat</Link>
      <Link to="skull">Skull Candy</Link>
      <Link to="marshall">Marshall</Link>
      <Link to="samsung">Samsung</Link>
      <Link to="jbl">Jbl</Link>
      <Link to="hp">Hp</Link> 
      <Link to="nikon">Nikon</Link>
      <Link to="canon">Canon</Link>
      <Link to="sony">Sony</Link>
      <Link to="amazon">Amazon</Link>
    </div>
  </div>
    <Link to="more">More</Link>
    <Link to="guide">Buying guidelines</Link>
    <Link to="login">Login</Link>

  
    </div>
  
    <div className='con1'>
    <img className="p11" src="samwatch.png"></img>
    <img className="img1" src="sam logo.png"></img>
    <div className='ol1'>Price:₹27,999.00</div><br></br>
    <div className='n1'>Offer price:₹25,000.00</div>
    </div>
    <div className='con2'>
    <img className="p21"src="apple2.png"></img>
    <img className="img2" src="apple logo5.png"></img>
    <div className='ol2'>Price:₹89,900.00</div><br></br>
    <div className='n2'>Offer price:₹85,000.00</div>
    </div>
    <div className='con3'>
    <img class="p31" src="sony1.png"></img>
    <img className="img3" src="sonyl.png"></img>
    <div className='ol3'>Price:₹1,28,990.00</div><br></br>
    <div className='n3'>Offer price:₹1,22,000.00</div>
    </div>
    <div className='about'>
      <div className='iiii'><h1>About us</h1>WELCOME TO RAPTECH,
RAPTECH is the technology destination of the globe's most-read website --- The Times of India. We cover everything and anything technology -- news, views, reviews, launches, trends and much more.
With our roots in the country’s biggest media powerhouse, The Times of India group, news is one of our biggest strengths. You can read about all that happens just anywhere in the world of technology, including gadgets and gizmos, on Raptech.

We at RAPTECH love everything that has a digital pulse.Raptech is also the go-to destination for gadget reviews. Here you will find in-depth reviews of smartphones, cameras, TVs, speakers, laptops, smartwatches, tablets, fitness bands, power banks and more.</div>
    <img className='si1' src='rttt.png'></img>
    </div>
  </div>
  );
}
}

export default Is;