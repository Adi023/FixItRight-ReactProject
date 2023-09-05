import React ,{useState}from 'react'
import {useForm} from 'react-hook-form'

import AdminSidebar from '../AdminSidebar'

import serviceproviderservices from '../../../services/serviceproviderservices'

export default function RegisterSP() {

  const{register,handleSubmit}=useForm()

  const [srid,  setId] = useState('');

  const sendData=(e)=>
  {
   var di = srid
      // console.log(srid)
      serviceproviderservices.deleteServiceprovider(di)
    
      alert("Service Provider Deleted Succesfully")
  }
  return (

    <div id='e'>
      <AdminSidebar/>

        <h2>Delete ServiceProvider Record</h2>

         <form onSubmit={handleSubmit(sendData)}>
         <label>Service Provider ID</label> 
         <input type="number" {...register('sr_id',{required:"this is required"})}
          onChange={(e) => setId(e.target.value)} placeholder="Enter service provider id"/>      
        <br/><br/>
       <label></label> <input type="submit" />
        
    </form>

    </div>
  )
}






