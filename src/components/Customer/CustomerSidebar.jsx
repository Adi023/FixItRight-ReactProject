import React, { useEffect, useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Icon from "awesome-react-icons";


export default function CustomerSidebar() {

  const [cr_id, setID] = useState('');
  const getCustomer = () => {
    var id = localStorage.getItem('cr_id');
    setID(id);
  }

  useEffect(() => {
    getCustomer();
  });

  return (
    < >
      <div className="sidenav">
          <Icon name="user"  style={{color: '#1e99f8'}}/>Customer ID : {cr_id}
          <a href='/CustomerLogout'>Logout</a>
          <hr/>
          <a href='/CustomerLinkPage'>Home</a>
        <hr/>
        <a href='/ViewProfileCustomer'>My Profile</a>
        <hr/>
        <a href='/UpdateProfileCM'>Update Profile</a>
        <hr/>
        <a href='/AddOrder'>Book Order</a>
        <hr/>
        <a href='/ViewOrderCM'>View Order</a>
        <hr/>
        <a href='/GiveFeedback'>Feedback</a>
          <hr/>
          <h4 style={{marginTop:"250px"}}>FixIt<span style={{color:"#FD7F2C"}}>Right</span></h4>
          <p className="footer-company-name">FixItRight © 2022</p>

      </div>
    </>
  )
}
