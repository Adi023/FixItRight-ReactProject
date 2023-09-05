import React from 'react'

import './style.css'

import carpenter from './images/carpenter.jpg'
import technician from './images/technician.jpg'
import electrician from './images/electrician.jpg'
import plumbing from './images/plumbing.jpg'
import  mechanic from './images/mechanic.jpg'


import Footer from './Footer'
import NavHome from './NavHome'

import all from './images/all.jpg'
import home from './images/home.png'
import fetures from './images/features.jpg' 


export default function Home() {
  return (
    <div>
      <NavHome/>
      <br/>
      {/* <h1><b>Fix It Right</b></h1> */}
      
    
      <h1><u>Our Services</u></h1>
      <i><h3>"Delivering Best Quality Services, Securing Your Smile"</h3></i>
        <div id='home'>   
    <div className='box'>
    <img src={technician}  alt=" not found"/>
      <span><b>Technician</b></span>
    </div>
    <div className='box'>
    <img src={mechanic}  alt=" not found"/>
      <span><b>Mechanic</b></span>
    </div>
    <div className='box'>
      <img src={carpenter}  alt=" not found"/>
      <span><b>Carpenter</b></span>
    </div>
    <div className='box'>
    <img src={electrician} alt=" not found" />
      <span><b>Electrician</b></span>
    </div>
    <div className='box'>
    <img src={plumbing}  alt=" not found"/>
      <span><b>Plumber</b></span>
    </div>
  </div>

  {/* home 2nd div */}

  <div id='home2'>   
    <div className='box2'>
      <span>Our Technicians Repair<br/>
         your computers televisions <br/>
         any kind of device at<br/>
          your door steps.
      </span>
    </div>
    <div className='box2'>
   
      <span>Our mechanics are<br/>
         ready to give any <br/>
         mechanical services<br/>
          for your machines.</span>
    </div>
    <div className='box2'>
      
      <span>Our carpenters are<br/>
         ready to provide you<br/>
          best service for<br/>
           your furniture.</span>
    </div>
    <div className='box2'>
  
      <span>Making a new house,<br/>
         Don't worry <br/>
         just login to <br/>
         our websites <br/>
         for Electrician.</span>
    </div>
    <div className='box2'>
   
      <span>
       plumbers are available<br/>
       all the times to <br/>
       serve you the best <br/>
       they can.
      </span>
    </div>
  </div>
  <hr/>
  <div id='home2' style={{width:"auto",marginLeft:"10px",height:"350px"}}>
    <img src={all} alt="image not awailable"/>
  </div>
  <hr/>
  <h1><u>Our Workflow</u></h1>
  <i><h3>"Enjoy Your Required Service At 3 Steps Ahead"</h3></i>
  <div id='home2' style={{width:"auto",marginLeft:"10px",height:"350px"}}>
    <img src={home} alt="image not awailable"/><br/>
  </div>
 <h4><i> <a href='/RegisterCustomer'>Click here</a>to Customer Registration</i></h4>
<br/>
<hr/>
<h1><u>Our Key Features</u></h1>
<i><h3>"Honest. Reliable Service."</h3></i>


{/* "Enjoy Your Required Service At 3 Steps Ahead" */}
  <div id='home2' style={{width:"auto",marginLeft:"10px",height:"250px"}}>
    <img src={fetures} alt="image not awailable"/><br/>
  </div>
 <h4><i> <a href='/RegisterCustomer'>Click here</a>to Customer Registration</i></h4>
<br/>
  <br/>
  
  <Footer/>
    </div>
  )
}
