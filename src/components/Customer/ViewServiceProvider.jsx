import React,{ useEffect } from 'react'
import { useState } from 'react'
import CustomerSidebar from './CustomerSidebar';


import './style.css'

export default function ViewAllServiceProvider(props) {
  const[data,setData]=useState([]);
   

 useEffect(()=>
   {
       fetch("http://localhost:8081/view")
       .then(response=>response.json())
       .then((result)=>
       {
        //  console.log(result)
          setData(result)
       })
   },[])
  
  return (
    <div id='d'>
      <CustomerSidebar/>
        <h1>Service Providers</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>sr_id</th>
                            <th>category_id</th>
                            <th>sr_address</th>
                            <th>sr_city</th>
                            <th>sr_emailid</th>
                            <th>sr_mobile_no</th>
                            <th>sr_name</th>
                            <th>sr_pass</th>
                            <th>sr_profile_description</th>
                            <th>sr_service_rate</th>
                            <th>sr_state</th>
                            <th>sr_status</th>
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.sr_id}>

                            <td>{d.sr_id}</td>
                            <td>{d.category_id}</td>
                            <td>{d.sr_address}</td>
                            <td>{d.sr_city}</td>
                            <td>{d.sr_emailid}</td>
                            <td>{d.sr_mobile_no}</td>
                            <td>{d.sr_name}</td>
                            <td>{d.sr_pass}</td>
                            <td>{d.sr_profile_description}</td>
                            <td>{d.sr_service_rate}</td>
                            <td>{d.sr_state}</td>
                            <td>{d.sr_status}</td>
                            <td><a href={'ViewAllServiceProvider/'+d.sr_id}>Edit</a></td>  
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
  )
}