import React ,{useEffect,useState}from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import CustomerSidebar from './CustomerSidebar'

import orderservices from '../../services/orderservices'

export default function RegisterCustomer() {

  let navigate = useNavigate();

  const [cr_id, setID] = useState('');
 
    const getCustomer=()=>{
      var id = localStorage.getItem('cr_id');
      setID(id);
        // p = localStorage.getItem('cr_pass');
    }
  
    useEffect (()=>{
      getCustomer();
      })
    const{register,handleSubmit}=useForm()
    const sendData=(e)=>
    {
        orderservices.registerOrders(e)
        alert("Order Booked Succesfully")
        // console.log(e)
        navigate('/ViewOrderCM');
    }
    
  return (
    <div>
      <CustomerSidebar/>
    <h1> Order Booking Page</h1>
    <hr/>
    <form onSubmit={handleSubmit(sendData)}>
   {/*  */}
  
   <label ><b>Customer ID</b></label>
    <input type="number" {...register('crid')} defaultValue={cr_id} placeholder={cr_id} required/><br/><br/>

    <label ><b>Category Type</b></label>
  <select {...register('categorid')} required>
  <option  value={[1]}>Technician</option>
  <option  value={[2]}>Mechanic</option>
  <option  value={[3]}>Carpenter</option>
  <option  value={[4]}>Electrician</option>
  <option  value={[5]}>Plumber</option>
  </select>
  <br/><br/>

    <label ><b>Description</b></label>
    <input type="textarea" {...register('or_description')} placeholder={"Enter Description"} required/><br/><br/>

    <label ><b>Address</b></label>
    <input type="text" {...register('or_address')} placeholder={"Enter Address"} required/><br/><br/>

    <label ><b>City</b></label>
    <input type="text" {...register('or_city')} placeholder={"Enter City"} required/><br/><br/>

    <label ><b>Booking Date</b></label>
    <input type="date" {...register('or_bookingDate')} placeholder={"Enter Booking Date"} required/><br/><br/>

    <label ><b>Mobile</b></label>
    <input type="number" {...register('or_mobileNo')} placeholder={"Enter Mobile"} required/><br/><br/>

    <label ><b>Status</b></label>
    <input type="text" {...register('or_status')} value={"Inprocess"} placeholder={"Enter Status"} readOnly /><br/><br/>

    <label ><b>Service Provider id</b></label>
    <input type="number" {...register('srid')} value={1} placeholder={"Enter service provider id"} required/><br/><br/>

    <label/>
    <input type="reset"/><br/><br/>
    <label/>
    <input type="submit" value={"Register"}/> <br/>
    

    </form>
    </div>
  )
}
