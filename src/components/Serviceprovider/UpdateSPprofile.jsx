import React,{useState,useEffect}  from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import serviceproviderservices from '../../services/serviceproviderservices'
import SPsidebar from './SPsidebar'

export default function UpdateSPprofile() {
  let navigate = useNavigate();
  const{register,handleSubmit}=useForm()

  const sendData=(e)=>
  {
    serviceproviderservices.updateServiceprovider(e)
      // alert("Data Updated Succesfully")
      navigate('/ViewSPprofile');
      // console.log(e)
  }

  const updateService=()=>{
    var srid=localStorage.getItem('sr_id');
    serviceproviderservices.getServiceproviderById(srid).then(
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
  // console.log(data.sr_id)
  
  useEffect (()=>{
    updateService();
  },[]);
    
  return (
    <div>
      <SPsidebar/>
    <h1> Service Provider Registration Page</h1>
    
    <hr/>
    <form onSubmit={handleSubmit(sendData)}>
    <label ><b>Registration id</b></label>
   <input type="text" {...register('sr_id')} defaultValue={data.sr_id} placeholder={data.sr_id} required/><br/><br/>
  
  <label ><b>Category Type</b></label>
  <select {...register('categorid')} defaultValue={data.categorid} required>
  <option  value={[1]}>Technician</option>
  <option  value={[2]}>Mechanic</option>
  <option  value={[3]}>Carpenter</option>
  <option  value={[4]}>Electrician</option>
  <option  value={[5]}>Plumber</option>
  </select>
  <br/><br/>

   <label ><b>Name</b></label>
    <input type="text" {...register('sr_name')}  defaultValue={data.sr_name}  placeholder={data.sr_name} required/><br/><br/>

   <label ><b>Address</b></label>
    <input type="text" {...register('sr_address')} defaultValue={data.sr_address} placeholder={data.sr_address} required/><br/><br/>

    <label ><b>City</b></label>
    <input type="text" {...register('sr_city')}  defaultValue={data.sr_city} placeholder={data.sr_city} required/><br/><br/>

    <label ><b>State</b></label>
    <input type="text" {...register('sr_state')} defaultValue={data.sr_state} placeholder={data.sr_state} required/><br/><br/>

    <label ><b>Mobile</b></label>
    <input type="number" {...register('sr_mobileNo')} defaultValue={data.sr_mobileNo}  placeholder={data.sr_mobileNo} required/><br/><br/>

    <label ><b>Email</b></label>
    <input type="email" {...register('sr_emailid')} defaultValue={data.sr_emailid} placeholder={data.sr_emailid} required/><br/><br/>

    <label ><b>Password</b></label>
    <input type="password" {...register('sr_pass')}  defaultValue={data.sr_pass} placeholder={data.sr_pass} required/><br/><br/>

    {/*<label ><b>Confirm Password</b></label>
    <input type="password" {...register('cnf_pass')} placeholder={"Enter Password for confermation"} required/><br/><br/>
    */}

    <label ><b>Service Rate </b></label>
    <input type="text" {...register('sr_service_rate')}  defaultValue={data.sr_service_rate} placeholder={data.sr_service_rate} required/><br/>
    <b> (Enter Service Rate on Hourly Basis *)</b><br/><br/>

    <label ><b>Profile Description</b></label>
   
    <textarea cols={40} rows={5} {...register('sr_profile_description')} defaultValue={data.sr_profile_description} placeholder={data.sr_profile_description} required/><br></br>

    <label ><b>Active Status</b></label>
    <select {...register('sr_status')}  defaultValue={data.sr_status} required> 
      <option >select</option>  
      <option >Available</option>  
        <option >Unavailable</option>
       
    </select><br/><br/>

    <input type="submit" value={"Register"}/>

    </form>
    </div>
  )
}
