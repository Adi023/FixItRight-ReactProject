import React,{useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import CustomerSidebar from './CustomerSidebar';

export default function CustomerLinkPage() {

  const [cr_id, setID] = useState('');
var p;
  const getCustomer=()=>{
    var id = localStorage.getItem('cr_id');
    setID(id);
      p = localStorage.getItem('cr_pass');
  }

  useEffect (()=>{
    getCustomer();
    toast.success("Welcome Customer to FixItRight",{
      toastId:p
    })
});

  return (
    <div id='cust'>
       <h1 style={{position:"absolute",left:"310px",top:"20px",color:"#000B49",fontSize:"45px"}}>
        <b><u>Customer Home</u></b>
        </h1>
       <CustomerSidebar></CustomerSidebar>
        <ToastContainer position="top-center"/>
    </div>
  )
}
