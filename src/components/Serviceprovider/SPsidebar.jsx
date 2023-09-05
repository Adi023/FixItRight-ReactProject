import React, { useEffect, useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Icon from "awesome-react-icons";


export default function SPsidebar() {

  const [sr_id, setID] = useState('');
  const getCustomer = () => {
    var id = localStorage.getItem('sr_id');
    setID(id);
  }

  useEffect(() => {
    getCustomer();
  });

  return (
    < >
      <div className="sidenav">
          <Icon name="user"  style={{color: '#1e99f8'}}/>Service Provider ID : {sr_id}
          <a href='/SPLogout'>Logout</a>
          <hr/>
          <a href='/SPLinks'>Home</a>
          <hr/>
          <a href='/ViewSPprofile'>View Profile</a>
          <hr/>
          <a href='/UpdateSPprofile'>Update  Profile</a>
          <hr/>
    <a href='/ViewAllOrderSP'>View All Order </a>
    <hr/>
    <a href='/ViewFeedbackById'>View Feedbacks</a>
    <hr/>
    <h4 style={{marginTop:"320px"}}>FixIt<span style={{color:"#FD7F2C"}}>Right</span></h4>
    <p className="footer-company-name">FixItRight © 2022</p>
   
     
      </div>
    </>
  )
}
