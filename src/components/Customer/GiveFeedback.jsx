import React from 'react'
import { useForm } from 'react-hook-form'

import feedbackservices from '../../services/feedbackservices'
import CustomerSidebar from './CustomerSidebar';

export default function GiveFeedback() {

  var crid=localStorage.getItem('cr_id');

    const{register,handleSubmit}=useForm()
    
    const sendData=(e)=>
    {
      feedbackservices.registerFeedback(e)
        alert("Feedback added Succesfully")
        // console.log(e)
    }
    
  return (
    <div>
      <CustomerSidebar/>
    <h1> Feedback Page</h1>
    <hr/>
    <form onSubmit={handleSubmit(sendData)}>
    {/* <label ><b>Feedback Id</b></label>
   <input type="text" {...register('feedback_id')} placeholder={"Enter Feedback id"} required/><br/><br/> */}
  
   <label ><b>Customer ID</b></label>
    <input type="number" {...register('crid')} defaultValue={crid} placeholder={"Enter Customer ID"} required/><br/><br/>

    <label ><b>Feedback Date</b></label>
    <input type="date" {...register('feedback_date')} placeholder={"Enter Feedback Date"} required/><br/><br/>

    <label ><b>Feedback</b></label>
    <textarea type="text" cols={40} rows={5} {...register('feedback_descpt')} placeholder={"Enter Feedback"} required/><br/>
    <b>Add Feedback in 250 character *</b><br/><br/>

    <label ><b>SP ID</b></label>
    <input type="number" {...register('srid')} placeholder={"Enter Service Provider ID"} required/><br/><br/>

    <label/>
    <input type="submit" value={"Give Feedback"}/>

    </form>
    </div>
  )
}
