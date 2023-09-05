import React,{ useEffect } from 'react'
import { useState } from 'react'

import getAllServiceprovider from '../../services/serviceproviderservices'
import SPsidebar from './SPsidebar';

import './style.css'

export default function ViewSPprofile() {
  
const getService=()=>{
  var srid=localStorage.getItem('sr_id');
  getAllServiceprovider.getServiceproviderById(srid).then(
      (Response)=>{
          // console.log(Response.data)
          setData(Response.data)
      },
      (Error)=>{
          console.log(Error);
      }
  ) ; 
};

const[data,setData]=useState([]);

useEffect (()=>{
  getService();
},[]);
 
  return (
    <form>
      <SPsidebar/>
           
        <div id='profile'>
        <u><h1 style={{marginLeft:"400px"}}> Service Provider Profile</h1></u>
          <h2>
          <fieldset >
          {/* <legend >Personalia:</legend>  */}
          Id : {data.sr_id} <br/>
          Name : {data.sr_name}<br/>
          Status :  {data.sr_status}<br/>
          </fieldset>

          <hr/>
          Mobile No : {data.sr_mobileNo}<br/>
          Email : {data.sr_emailid}<br/>
          password :  {data.sr_pass}<br/>

          <hr/>

          Address : {data.sr_address}<br/>
          City : {data.sr_city}<br/>
          State : {data.sr_state}<br/>

          <hr/>
          Category ID : {data.categorid}<br/>
          Profile Description :  {data.sr_profile_description}<br/>
          Service Rate :  {data.sr_service_rate}<br/>
          </h2>
        </div>
    </form>
  )
}
