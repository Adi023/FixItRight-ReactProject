import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import customerservices from '../../services/customerservices'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import NavHome from '../NavHome';
import Footer from '../Footer';

// import { history } from 'History';



export default function CustomerLogin() {

  
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  const [customer, setData] = useState([]);

  const onLogin = () => {
    let emailid = document.getElementById("cr_email")
    let pass = document.getElementById("cr_pass")

    localStorage.setItem('cr_pass', pass.value)

    // console.log(customer)

    var verify;
    customer.map(val => {
      if (val.cr_email == emailid.value && val.cr_pass == pass.value) {
        let obj = { cr_id: val.admin_id, cr_pass: val.cr_pass, cr_email: val.cr_email }
        verify = obj;

        // console.log(val.cr_id)
        localStorage.setItem('cr_id', val.cr_id)
        // toast.success("Login Successfull");
        navigate('/CustomerLinkPage');
      }
    })
    if (verify == null) {
      toast.error("Incorrect User Id or Password");
    }
  }

  const getCUstomer = () => {
   
    customerservices.getAllCustomers().then(
      (Response) => {
        // console.log(Response.data);
        setData(Response.data)
      },
      (Error) => {
        console.log(Error);
      }
    );
  };

function preventbcak(){
  window.history.forward();
}
setTimeout(preventbcak(),0);
window.onunload = function (){"null"}
window.onload=function (){"null"}

  useEffect(() => {
    getCUstomer();
  }, []);

  return (
    <div>
      <NavHome/>
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
                <input type="email" {...register('cr_email')} id="cr_email" placeholder={"Enter Email id"} required />


                <input type="password" {...register('cr_pass')} id="cr_pass" placeholder={"Enter Password"} required />

                <button  className="submit" id="signin" >Sign In</button>
                <br/>
                <div className="top_link">New User Register <a href="/RegisterCustomer"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Click here</a></div>
      
   
              </form>
            </div>
           
          </div>
          <div className="right">

            <h1>Customer Page</h1>

            <div className="right-inductor"><img src="" alt="" /></div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
      <Footer/>
    </div>
  )
}
