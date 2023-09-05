import React,{ useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

import getAllServiceprovider from '../../services/serviceproviderservices'
import CustomerSidebar from './CustomerSidebar';

export default function ViewSP() {
  
    const param=useParams()
const getService=()=>{
//   var srid=localStorage.getItem('sr_id');
// console.log(param.srid)
  getAllServiceprovider.getServiceproviderById(param.srid).then(
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
    <div >
      <CustomerSidebar/>
           
        <div id='profile'>
        <u><h1 style={{marginLeft:"400px"}}>Assigned Service Provider</h1></u>
          <h2>
           
          Service Provider<br/> 
          Service Provider Id :{data.sr_id}<br/>
          Name : {data.sr_name}<br/>
          Status :  {data.sr_status}<br/>
          Service Rate :  {data.sr_service_rate}<br/>
          Category : {data.categorid}<br/>
          <hr/>

          Address : {data.sr_address}<br/>
          City : {data.sr_city}<br/>
          State : {data.sr_state}<br/>
          <hr/>

          Mobile No : {data.sr_mobileNo}<br/>
          Email : {data.sr_emailid}<br/>
          Profile Description :  {data.sr_profile_description}<br/>
          </h2>
        </div>
    </div>
  )
}
