import React,{ useEffect } from 'react'
import { useState } from 'react'

import AdminSidebar from '../AdminSidebar'
import feedback from '../../../services/feedbackservices'

export default function ViewFeedbackAdmin(props) {
  const getService=()=>{
    feedback.getAllFeedback().then(
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
        <h1>ViewFeedback</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Feedback Id</th>
                            <th>Customer Id</th>
                            <th>ServiceProvider Id</th>
                            <th>Feedback Description</th>
                            <th>Feedback Date</th>
                            <th></th>
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.feedback_id}>

                            <td>{d.feedback_id}</td>
                            <td>{d.crid}</td>
                            <td>{d.srid}</td>
                            <td>{d.feedback_descpt}</td>
                            <td>{d.feedback_date}</td>  
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
  )
}