import React from 'react'
import Footer from './Footer'
import NavHome from './NavHome'

import aboutus from './images/pic1.png'

import './aboutus.css'

export default function AboutUs() {
  return (
    <div>
      <NavHome></NavHome>
      {/* <h1>About Us</h1> */}
      <div className="img"><img id='im' src={aboutus} /></div><br />

      <div className="about" >
        <br />
        <h1 className="p">About Us</h1><br />

        <p className="q">We aim to help in providing optimal solutions to all
          your household troubles with more efficiency, ease and majorly, a delicate touch. A single click system describes
          booking highly skilled in-house professionals and gets your service done on time. Several aspects like plumbing,
          electrical & mechanical works, and carpentry services are involved in a system to provide happy and healthy home
          atmosphere in order to satisfy consumers. Online system for household services can be used by any authorized
          user intending to seek for household services through an ingenious web-based system.</p><br />

        {/* <button className="button">Contact Us</button><br/><br/><br/><br/> */}

        <div className="e">
          <h1 className="r"><u>Email </u></h1>
          <h5 className="email">trunal1404@gmail.com</h5>
          <h5 className="email">shraddhashinde906@gmail.com</h5>
          <h5 className="email">vrushaliyb1997@gmail.com</h5>
          <h5 className="email">adityapandhare050@gmail.com</h5>
        </div>

        <div className="a">
          <h1 className="u"><u>Our Branches</u></h1>
          <h5>NAGPUR</h5>
          <h5>NASHIK</h5>
          <h5>PUNE</h5>
          <h5>KOLHAPUR</h5>
        </div>

        <div className="c">
          <h1 className="v"> <u>CALL US</u></h1>
          <h4 className="w">+91 7498050589</h4>
          <h4 className="w">+91 7972896447</h4>
          <h4 className="w">+91 7350150550</h4>
          <h4 className="x">+91 8421600314</h4>
        </div>
      </div>

      <br /><br />


      <div id='d'>
        <Footer />
      </div>
    </div>
  )
}
