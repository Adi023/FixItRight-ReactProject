import React,{ useEffect } from 'react'
import { useState } from 'react'

import orderservices from '../../services/orderservices'
import SPsidebar from './SPsidebar';

export default function ViewAllOrderSP() {
  
  const getService=()=>{
    var srid=localStorage.getItem('sr_id');
    orderservices.viewOrderSr(srid).then(
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
      <SPsidebar/>
        <h1>View All Orders</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Customer Id</th>
                            <th>Category Id</th>
                            <th>Order Description</th>
                            <th>Order Address</th>
                            <th>Order City</th>
                            <th>Order Mobile Number</th>
                            <th>Order Booking Date</th>
                            <th>Order Status</th>
                            <th>Service Provider</th>
                            
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.order_id}>

                            <td>{d.order_id}</td>
                            <td>{d.crid}</td>
                            <td>{d.categorid}</td>
                            <td>{d.or_description}</td>
                            <td>{d.or_address}</td>
                            <td>{d.or_city}</td>
                            <td>{d.or_mobileNo}</td>
                            <td>{d.or_bookingDate}</td>
                            <td>{d.or_status}</td>
                            <td>{d.srid}</td>
                             
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
  )
}