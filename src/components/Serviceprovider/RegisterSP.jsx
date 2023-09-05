import React from 'react'
import { useForm } from 'react-hook-form'

import NavHome from '../NavHome'
import Footer from '../Footer'

import { useNavigate } from 'react-router-dom';
import serviceproviderservices from '../../services/serviceproviderservices'

export default function RegisterSP() {
  let navigate = useNavigate();
    const{register,handleSubmit}=useForm()
    const sendData=(e)=>
    {
        serviceproviderservices.regiSterserviceprovider(e)
        alert("Registerd Succesfully")
        // console.log(e)
        navigate('/ServiceProviderLogin');
    }
    
  return (
    <div>
      <NavHome/>
    <h1> Service Provider Registration</h1>
    Please fill this form to Register
    
    <hr/>
    <form onSubmit={handleSubmit(sendData)}>
    {/*<label ><b>Registration id</b></label>
   <input type="text" {...register('sr_id')} placeholder={"Enter Regstrationid"} required/><br/><br/>
  */}
  <label ><b>Category Type</b></label>
  <select {...register('categorid')} required>
  <option  value={[1]}>Technician</option>
  <option  value={[2]}>Mechanic</option>
  <option  value={[3]}>Carpenter</option>
  <option  value={[4]}>Electrician</option>
  <option  value={[5]}>Plumber</option>
  </select>
  <br/><br/>

   <label ><b>Name</b></label>
    <input type="text" {...register('sr_name')} placeholder={"Enter Name"} required/><br/><br/>

   <label ><b>Address</b></label>
    <input type="text" {...register('sr_address')} placeholder={"Enter Address"} required/><br/><br/>

    <label ><b>City</b></label>
    <input type="text" {...register('sr_city')} placeholder={"Enter City"} required/><br/><br/>

    <label ><b>State</b></label>
    <input type="text" {...register('sr_state')} placeholder={"Enter State"} required/><br/><br/>

    <label ><b>Mobile</b></label>
    <input type="number" {...register('sr_mobileNo')} placeholder={"Enter Mobile"} required/><br/><br/>

    <label ><b>Email</b></label>
    <input type="email" {...register('sr_emailid')} placeholder={"Enter Email"} required/><br/><br/>

    <label ><b>Password</b></label>
    <input type="password" {...register('sr_pass')} placeholder={"Enter Password"} required/><br/><br/>

    {/*<label ><b>Confirm Password</b></label>
    <input type="password" {...register('cnf_pass')} placeholder={"Enter Password for confermation"} required/><br/><br/>
    */}

    <label ><b>Service Rate </b></label>
    <input type="number" {...register('sr_service_rate')} placeholder={"Enter service rate"} required/><br/>
    <b>(Enter Service Rate on Hourly Basis *)</b><br/><br/>

    <label><b>Profile Description</b></label>
  
    <textarea cols={30} rows={5} {...register('sr_profile_description')} placeholder={"Enter profile description"} required/><br></br>

    <label ><b>Active Status</b></label>
    <select {...register('sr_status')} required> 
        <option  value={["Un_Available"]}>Unavailable</option>
        <option  value={["Available"]}>Available</option>
        <option  value={["Working"]}>Working</option>    
    </select><br/><br/>
    <label/><button type="reset">Reset</button><br/><br/>
<label/>
    <input type="submit" value={"Register"}/><br/>
    
    </form>
    <Footer/>
    </div>
  )
}
