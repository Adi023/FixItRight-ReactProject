import React, { useEffect } from 'react'
import { useState } from 'react'


import customerservices from '../../services/customerservices'
import CustomerSidebar from './CustomerSidebar';

export default function ViewProfileCustomer(props) {

  const getService=()=>{
    // var cr_id=1
     var id=localStorage.getItem('cr_id');
    
    customerservices.getCustomerById(id).then(
        (Response)=>{
            //console.log(Response.data)
            setData(Response.data)
        },
        (Error)=>{
            console.log(Error);
        }
    ) ; 
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getService();
  }, []);

  return (
    <div >
      <CustomerSidebar/>

        <div id='profile'>
        <u><h1 style={{marginLeft:"400px"}}> Customers Profile</h1></u>
          <h2>
           Id : {data.cr_id}<br/>
           Name : {data.cr_name}<br/>
           password :  {data.cr_pass}<br/>
          <hr/>

           Address : {data.cr_address}<br/>
           City : {data.cr_city}<br/>
           State : {data.cr_state}<br/>
          <hr/>
           Mobile No : {data.cr_mobileNo}<br/>
           Email : {data.cr_email}<br/>

          </h2>
        </div>

    </div>
  )
}
