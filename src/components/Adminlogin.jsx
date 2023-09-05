import React,{ useState,  useEffect }  from 'react'
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './loginstyle.css'


import adminservices from '../services/adminservices'
import NavHome from './NavHome';
import Footer from './Footer';

const Adminlogin = () => {

    const [admin_id, setEmail] = useState('');
    const [admin_pass, setPassword] = useState('');
    const [user, setUser] = useState([]);
   
    let navigate = useNavigate();

    const getCUstomer=()=>{
      adminservices.getAll().then(
          (Response)=>{
            //   console.log(Response.data);
              setUser(Response.data)
          },
          (Error)=>{
              console.log(Error);
          }
      ) ; 
  };

  function preventbcak(){
    window.history.forward();
  }
  setTimeout(preventbcak(),0);
  window.onunload = function (){"null"}
  
    useEffect(() => {    
          getCUstomer()
    }, []);
  
   const onLogin=()=>{
    let id = document.getElementById("admin_id")
    let pass = document.getElementById("admin_pass")
    localStorage.setItem('admin_id',id.value)
    localStorage.setItem('admin_pass',pass.value)

    console.log(user)
   
    var verify;
    user.map(val => {
        if (val.admin_id == id.value && val.admin_pass == pass.value) {
            let obj = { admin_id: val.admin_id , admin_pass: val.admin_pass}
            verify = obj;
            console.log(val.admin_id)
                
            // toast.success("Login Successfull");
            navigate('/AdminAllLinks');
        }
    })
    if (verify == null) {
        toast.error("Incorrect User Id or Password");
    } 
}
  
    return (
       <div>
        <NavHome/>
        <script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="loginstyle.css"/>
        </script>
    <section className="login" >
		<div className="login_box">
			<div className="left">
				<div className="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt=""/>Return home</a></div>
				<div className="contact">
					<form action="">
						<h2>SIGN IN</h2>           
                                    <input type="number" id="admin_id" name='admin_id' 
                                    value={admin_id} onChange={(e) => setEmail(e.target.value)} placeholder="Admin ID"/>
                               
                                  
                                    <input type="password"  id="admin_pass"  name='admin_pass'
                                     value={admin_pass} onChange={(e) => setPassword(e.target.value)} placeholder="Admin Password"/>
                               
                                    <button className="submit" id="signin" onClick={onLogin}>Login</button><br></br>
					</form>
				</div>
			</div>
			<div className="right">
				
                    <h2>Admin Page</h2>
				
				<div className="right-inductor"><img src="" alt=""/></div>
			</div>
		</div>
	</section>
            <ToastContainer position="top-center"/>
            <Footer/>
        </div>
    )
}

export default Adminlogin