import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
// import { useParams } from "react-router-dom";

import orderservices from '../../services/orderservices'


import './style.css'

export default function CancelOrder() {
  const{register,handleSubmit}=useForm()

  const [srid,  setId] = useState('');

  const sendData=(e)=>
  {
   var di = srid
      // console.log(srid)
      orderservices.deleteOrders(di)
      alert("Service Provider Deleted Succesfully")
  }

  return (
    <div id='d'>
      <form onSubmit={handleSubmit(sendData)}>
       <h1>Deletebook</h1> 
        <label >Enter ISBN Number :</label> 
        <input type="text"  {...register('order_id')} onChange={(e) => setId(e.target.value)} placeholder="Enter ISBN for Delete Book"/><br/>
        <label></label><button type="submit">Submit</button><button type="reset">Reset</button><br/><br/>
        </form>
    </div>
  )
}
