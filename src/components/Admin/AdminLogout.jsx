import React,{useEffect}  from 'react'
import {  useNavigate } from 'react-router-dom';

export default function AdminLogout() {

  let navigate = useNavigate();
  const remove = () => {
    localStorage.removeItem('admin_id');
    localStorage.removeItem('admin_pass');
    navigate('/AdminLogin');
 };
 useEffect (()=>{
  remove();
},[]);
  return (
    <div>AdminLogout
        <a href='AdminLogin'>Logout</a>
    </div>
  )
}
