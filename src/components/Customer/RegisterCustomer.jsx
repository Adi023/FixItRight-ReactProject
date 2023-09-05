import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import customerservices from '../../services/customerservices'
import NavHome from '../NavHome'
import Footer from '../Footer'

export default function RegisterCustomer() {
  let navigate = useNavigate();

    const{register,handleSubmit}=useForm()


    const sendData=(e)=>
    {
        customerservices.registerCustomer(e)
        alert("Registered Succesfully")
        // console.log(e)
        navigate('/CustomerLogin');
    }
    
  return (
    <div>
      <NavHome/>
    <h1> Customer Registration Page</h1>
    <p>Please fill this form to Register</p>
    <hr/>
    <form onSubmit={handleSubmit(sendData)}>
    {/*<label ><b>Registrationid</b></label>
   <input type="text" {...register('cr_id')} placeholder={"Enter Regstrationid"} required/><br/><br/>
  */}
   <label ><b>Name</b></label>
    <input type="text" {...register('cr_name')} placeholder={"Enter Name"} required/><br/><br/>
   <label ><b>Address</b></label>
    <input type="text" {...register('cr_address')} placeholder={"Enter Address"} required/><br/><br/>

    <label ><b>City</b></label>
    <input type="text" {...register('cr_city')} placeholder={"Enter City"} required/><br/><br/>

    <label ><b>State</b></label>
    <input type="text" {...register('cr_state')} placeholder={"Enter State"} required/><br/><br/>

    <label ><b>Mobile</b></label>
    <input type="number" {...register('cr_mobileNo')} placeholder={"Enter Mobile"} required/><br/><br/>

    <label ><b>Email</b></label>
    <input type="email" {...register('cr_email')} placeholder={"Enter Email"} required/><br/><br/>

    <label ><b>Password</b></label>
    <input type="password" {...register('cr_pass')} placeholder={"Enter Password"} required/><br/><br/>

    {/*<label ><b>Confirm Password</b></label>
    <input type="password" {...register('cnf_pass')} placeholder={"Enter Password for confermation"} required/><br/><br/>
    <p>By creating an account you agree to our <a href="#">Terms condition & privacy</a>.</p>*/}
    <hr/>

    <input type="submit" value={"Register"}/>

    </form>
    <Footer/>
    </div>
  )
}
