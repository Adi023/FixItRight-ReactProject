import React,{ useEffect } from 'react'
import { useState } from 'react'

import AdminSidebar from './AdminSidebar'
import orderservices from '../../services/orderservices'

export default function ViewAllOrder(props) {
  const getService=()=>{
    orderservices.getAllOrders().then(
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
      <AdminSidebar/>
      <div>
        <h1>View All Orders</h1>
        <table border={3} align={"center"}>
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
                            <th>Order Service Provider</th>
                            <th>Assign Service Provider</th>
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
                            <td><a id='tda' href={'AssignSP/'+d.order_id}>Assign Service Provider</a></td>  
                          </tr>
                        )
                        )}
                </tbody>
            </table>  
            </div> 
    </div>
  )
}