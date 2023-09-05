import React,{ useEffect } from 'react'
import { useState } from 'react'

import categoryservices from '../../../services/categoryservices'

import AdminSidebar from '../AdminSidebar'

export default function ViewCategory() {

  const getService=()=>{
    categoryservices.getAllCategory().then(
        (Response)=>{
            // console.log(Response.data)
            setData(Response.data)
        },
        (Error)=>{
            console.log(Error);
        }
    ); 
  };
  const[data,setData]=useState([]);
  
  useEffect (()=>{
    getService();
  },[]);
  
  return (
    <div >
      <AdminSidebar/>
        <h1>View Category</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Category Name</th>
                            <th>View Service Provider</th>
                          
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.category_id}>
                            <td>{d.category_id}</td>
                            <td>{d.category_name}</td>
                            <td><a id='tda' href={'ViewSPbyCat/'+d.category_id}>View Service Providers</a></td>  
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
  )
}