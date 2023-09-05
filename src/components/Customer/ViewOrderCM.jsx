import React,{ useEffect } from 'react'
import { useState } from 'react'
// import { json } from 'react-router-dom'

import orderservices from '../../services/orderservices'
import CustomerSidebar from './CustomerSidebar'

export default function ViewOrderCM() {
  var id = localStorage.getItem('cr_id')
  console.log(id)

  // const[data,setData]=useState([]);

  // console.log(data)
  const[order,setOrder]=useState([]);

  // console.log(order)

  // var obj=JSON.stringify(order)

  // let l=JSON.parse(obj)
  // console.log(l.order_id)

  const getService=()=>{
    console.log("33")
    orderservices.viewOrderCr(id).then(
                    (Response)=>{
                      // console.log(Response.data)
                      setOrder(Response.data)
                  },
                  (Error)=>{
                      console.log(Error);
                  }); };
  
  useEffect (()=>{
    getService();
  },[]);

  if(order!=null){
  return (
    <div >
      <CustomerSidebar/>
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
                            <th>Service Provider ID</th>
                            <th>View Service Provider</th>
                        </tr>
                </thead>
                <tbody>
                   {order.map((d)=>
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
                            <td><a id='a' href={'ViewSP/'+d.srid}>View Service Provider</a></td>  
                          </tr>     
                            )
                        )} 
                </tbody>
            </table>   
    </div>
  )
}
else{
return(
<div>
  <h1>Please Book Your Order First</h1>
</div>
)}

}