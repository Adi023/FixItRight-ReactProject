import React,{ useEffect } from 'react'
import { useState } from 'react'

import AdminSidebar from '../AdminSidebar'

import customerservices from '../../../services/customerservices'

export default function ViewAllCustomersAdmin(props) {

  const getService=()=>{
    customerservices.getAllCustomers().then(
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
        <h1>ViewAllCustomers</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>Customer Address</th>
                            <th>Customer City</th>
                            <th>Customer State</th>
                            <th>Customer Mobile No</th>
                            <th>Customer Email </th>
                            <th>Customer password</th>
                        </tr>
                </thead>
                <tbody>
                 
                        {data.map((d)=>
                        (
                          <tr key={d.cr_id}>
                            <td>{d.cr_id}</td>
                            <td>{d.cr_name}</td>
                            <td>{d.cr_address}</td>
                            <td>{d.cr_city}</td>
                            <td>{d.cr_state}</td>
                            <td>{d.cr_mobileNo}</td>
                            <td>{d.cr_email}</td>
                            <td>{d.cr_pass}</td>
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
  )
}