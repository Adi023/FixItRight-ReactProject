import React,{useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import SPsidebar from './SPsidebar';
import './style.css'

export default function SPLinks() {
  const [sr_id, setID] = useState('');
  var p;
    const getServiceprovider=()=>{
      var id = localStorage.getItem('sr_id');
      setID(id);
        p = localStorage.getItem('sr_pass');
    }
  
    useEffect (()=>{
      getServiceprovider();
      toast.success("Welcome Sevice Provider to FixItRight",{
        toastId:p
      })
  });
  return (
    <div id='image'>
    <SPsidebar/>
    

   
    <h1 id='head'>Service Provider Home</h1> 
    <ToastContainer position="top-center"/>
    </div>
  )
}
