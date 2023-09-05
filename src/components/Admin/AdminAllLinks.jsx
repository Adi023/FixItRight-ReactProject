import React, {useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import AdminSidebar from './AdminSidebar';

import './adminhome.css'

export default function AdminAllLinks() {

const [admin_id, setID] = useState('');
var p;
  const getAdmin=()=>{
    var id = localStorage.getItem('admin_id');
    setID(id);
      p = localStorage.getItem('admin_pass');
  }

  useEffect (()=>{
    getAdmin();
    toast.success("Welcome Admin",{
      toastId:p
    })
});

  return (
    <div id='adh'>
      <AdminSidebar></AdminSidebar>
    <h1 style={{position:"absolute",right:"20px",top:"20px",width:"500px",color:"#000B49",fontSize:"55px",backgroundColor:"white"}}>
      <b>Admin Home</b>
      </h1>
        <ToastContainer position="top-center"/>
    </div>
    
  )
}
