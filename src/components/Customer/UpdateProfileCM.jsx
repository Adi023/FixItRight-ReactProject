import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import customerservices from '../../services/customerservices'
import CustomerSidebar from './CustomerSidebar'

export default function UpdateProfileCM() {
  let navigate = useNavigate();

    const{register,handleSubmit}=useForm()

    const sendData=(e)=>
    {
        customerservices.updateCustomer(e)
        alert("Data Updated Succesfully")
        // console.log(e)
        navigate('/ViewProfileCustomer');
    }

    const updateService=()=>{
      var crid=localStorage.getItem('cr_id');

      customerservices.getCustomerById(crid).then(
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
      updateService();
    },[]);
    
  return (
    <div>
      <CustomerSidebar/>
    <h1>Update Profile</h1>
    <p>Please fill all the fields of form to Update anything</p>
    <hr/>
    <form onSubmit={handleSubmit(sendData)}>
    <label ><b>Registrationid</b></label>
   <input type="text" {...register('cr_id')} defaultValue={data.cr_id} required/><br/><br/>
  
   <label ><b>Name</b></label>
    <input type="text" {...register('cr_name')} defaultValue={data.cr_name} required/><br/><br/>
   <label ><b>Address</b></label>
    <input type="text" {...register('cr_address')} defaultValue={data.cr_address} required/><br/><br/>

    <label ><b>City</b></label>
    <input type="text" {...register('cr_city')} defaultValue={data.cr_city} required/><br/><br/>

    <label ><b>State</b></label>
    <input type="text" {...register('cr_state')} defaultValue={data.cr_state} required/><br/><br/>

    <label ><b>Mobile</b></label>
    <input type="number" {...register('cr_mobileNo')} defaultValue={data.cr_mobileNo} required/><br/><br/>

    <label ><b>Email</b></label>
    <input type="email" {...register('cr_email')} defaultValue={data.cr_email} required/><br/><br/>

    <label ><b>Password</b></label>
    <input type="password" {...register('cr_pass')} defaultValue={data.cr_pass} required/><br/><br/>

    {/*<label ><b>Confirm Password</b></label>
    <input type="password" {...register('cnf_pass')} defaultValue={"Enter Password for confermation"} required/><br/><br/>
    <p>By creating an account you agree to our <a href="#">Terms condition & privacy</a>.</p>*/}
    <label/>
    <input type="submit" value={"Update"}/>

    </form>
    </div>
  )
}
