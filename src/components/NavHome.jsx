import React from 'react'

import './style.css'


export default function NavHome() {
  return (
    <>
      <nav id='nav' >
        <div >
          <ul style={{marginBottom:"0rem"}}>
            <li><a id='a' href="/">Home</a></li>
            <li><a id='a' href="Adminlogin">Admin</a></li>
            <li><a id='a' href="ServiceProviderLogin">ServiceProvider</a> </li>
            <li> <a id='a' href="CustomerLogin">Customer</a></li>
            <li> <a id='a' href="AboutUs">About</a></li>
          </ul>
        </div><br/><br/>
        <div id='po'>
        <h1 id='po' style={{ marginRight: "3.125rem", float: "right" }}><u>FixIt<span style={{ color: "#FD7F2C" }}>Right</span></u><br/>
        <h6 id='po' style={{ marginRight: "0.625rem", float: "right" }}>A touch of perfection</h6>
        </h1>
        </div>
        <br/><br/>
        
      </nav>
    </>
  )
}
