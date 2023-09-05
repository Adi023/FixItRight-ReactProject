import React,{useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';

export default function SPLogout() {
  let navigate = useNavigate();

  const remove = () => {
    localStorage.removeItem('sr_id');
    localStorage.removeItem('sr_pass');
    navigate('/ServiceProviderLogin');
 };
 useEffect (()=>{
  remove();
},[]);
  return (
    <div>Service Provider Logout 

      <h1>Thank you visit again...</h1>
    </div>
  )
}
