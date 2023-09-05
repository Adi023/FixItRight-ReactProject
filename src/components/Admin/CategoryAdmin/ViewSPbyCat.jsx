import React,{ useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
// import AdminSidebar from '../AdminSidebar'

import getAllServiceprovider from '../../../services/serviceproviderservices'

export default function ViewSPbyCat() {

    const param=useParams()
  
const getService=()=>{
    // console.log(param);
  getAllServiceprovider.getSPbycatid(param.catid).then(
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
     
        <h1>Service Providers</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Service Provider ID</th>
                            <th>Name</th>
                            <th>Category ID</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Email Id</th>
                            <th>Mobile No</th>
                            <th>Password</th>
                            <th>Profile Description</th>
                            <th>Service Rate</th>
                            <th>Status</th>
                        </tr>
                </thead>
                <tbody>
                {data.map ((d)=>
                      (
                          <tr key={d.sr_id}>
                            <td>{d.sr_id}</td>
                            <td>{d.sr_name}</td>
                            <td>{d.categorid}</td>
                            <td>{d.sr_address}</td>
                            <td>{d.sr_state}</td>
                            <td>{d.sr_city}</td>
                            <td>{d.sr_emailid}</td>
                            <td>{d.sr_mobileNo}</td>
                            <td>{d.sr_pass}</td>
                            <td>{d.sr_profile_description}</td>
                            <td>{d.sr_service_rate}</td>
                            <td>{d.sr_status}</td>
                          </tr>
                  ))
                        }
                        </tbody>
            </table>   
    </div>
  )
}
