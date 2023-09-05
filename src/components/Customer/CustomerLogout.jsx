import React,{useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';

export default function CustomerLogout() {
  let navigate = useNavigate();

// function ClearHistory()
// {
//      var backlen = window.history.length;
//      window.history.go(-backlen);
//      window.location.href = '/CustomerLogout'
// }

  const remove = () => {
    localStorage.removeItem('cr_id');
    localStorage.removeItem('cr_pass');
    // history.replaceState('/CustomerLogin')
    // history.replace('/CustomerLogin')
    navigate('/CustomerLogin');
 };
 useEffect (()=>{
  remove();
  // ClearHistory();
},[]);
  return (
    <div>CustomerLogout

      <h1>Thank you visit again...</h1>
    </div>
  )
}
