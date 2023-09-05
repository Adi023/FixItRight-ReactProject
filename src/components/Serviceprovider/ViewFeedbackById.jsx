import React,{ useEffect } from 'react'
import { useState } from 'react'

import feedback from '../../services/feedbackservices'
import SPsidebar from './SPsidebar';

export default function ViewFeedbackById(props) {
  var id=localStorage.getItem('sr_id');
  const getService=()=>{
    feedback.getFeedbackBySr(id).then(
        (Response)=>{
            // console.log(Response.data)
            setData(Response.data)
        },
        (Error)=>{
            console.log(Error);
        }
    ) ; 
  };
  
  const[f,setData]=useState([]);
  
  useEffect (()=>{
    getService();
  },[]);
  
  return (
    <div >
      <SPsidebar/>
        <h1>ViewFeedback</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>Feedback Id</th>
                            <th>Customer Id</th>
                            <th>ServiceProvider Id</th>
                            <th>Feedback Description</th>
                            <th>Feedback Date</th>
                           
                        </tr>
                </thead>
                <tbody>
                {f.map((d)=>
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