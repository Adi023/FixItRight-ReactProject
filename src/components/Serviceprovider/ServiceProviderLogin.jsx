import React ,  { useEffect ,useState}from 'react'
import { useForm } from 'react-hook-form'
import serviceproviderservices from '../../services/serviceproviderservices'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NavHome from '../NavHome';
import Footer from '../Footer';



export default function ServiceProviderLogin() {
  
  let navigate = useNavigate();
  const{register,handleSubmit}=useForm()
  const[serviceprovider,setData]=useState([]);

 

   const onLogin=()=>{
    let emailid = document.getElementById("sr_emailid")
    let pass = document.getElementById("sr_pass")
    var verify;
    serviceprovider.map(val => {
        if (val.sr_emailid == emailid.value && val.sr_pass == pass.value) {
            let obj = { sr_emailid: val.sr_emailid , sr_pass: val.sr_pass,sr_id:val.sr_id}
            verify = obj;

            localStorage.setItem('sr_id',val.sr_id)
            localStorage.setItem('sr_pass',val.sr_pass)
            // toast.success("Login Successfull");
            navigate('/SPLinks');
        }
    })
    if (verify == null) {
        toast.error("Incorrect User Id or Password");
    } 
}

  const getCUstomer=()=>{
    serviceproviderservices.getAllServiceprovider().then(
        (Response)=>{
            // console.log(Response.data);
            setData(Response.data)
        },
        (Error)=>{
            console.log(Error);
        }
    ) ; 

    // function preback() {window.history.forward()}
    // setTimeout(preback,0)
    // window.onunload=function(){null};
};

//below code is for aftr logout  
function preventbcak(){
  window.history.forward();
}
setTimeout(preventbcak(),0);
window.onunload = function (){"null"}
window.onload=function (){"null"}


useEffect (()=>{
  getCUstomer();
 
},[]);


  return (
    <div>
      <NavHome/>
        <div>

        <script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
        <link rel="stylesheet" href="loginstyle.css" />
      </script>
      <section className="login" >
        <div className="login_box">
          <div className="left">
            <div className="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</a></div>
            <div className="contact">

        <form onSubmit={handleSubmit(onLogin)}>
        <h3>SIGN IN</h3>
    <input type="email" {...register('sr_emailid')} id="sr_emailid" placeholder={"Enter Email id"} required/>
    
   
    <input type="password" {...register('sr_pass')} id="sr_pass"   placeholder={"Enter Password"} required/>
       
        <button  className="submit" id="signin" >Sign In</button>
        <br/>
       
        <div className="top_link">New User Register <a href="/RegisterSP"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Click here</a></div>
      
        </form>
      
        </div>
      </div>
          <div className="right">

            <h1>Service Provider Page</h1>

            <div className="right-inductor"><img src="" alt="" /></div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center"/>
    </div>
    <Footer/>
    </div>
  )
}
