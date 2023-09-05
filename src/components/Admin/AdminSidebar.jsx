import React, { useEffect, useState } from 'react'
import '../sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Icon from "awesome-react-icons";


export default function AdminSidebar() {

  const [admin_id, setID] = useState('');
  const getAdmin = () => {
    var id = localStorage.getItem('admin_id');
    setID(id);
  }

  useEffect(() => {
    getAdmin();
  });


  // function openNav() {
  //   document.getElementById("mySidenav").style={width:"250px"}
  // }
  
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width="0px"
  // }

  return (
    < >
    {/* <script>
function openNav() {
    document.getElementById("mySidenav").style={width:"250px"}
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width="0px"
  }
</script> */}

      <div className="sidenav">
      {/* <a href={{javascript:void(0)}} className="closebtn" onClick={"closeNav"}>&times;</a> */}
        <ul>
       
          <Icon name="user"  style={{color: '#1e99f8'}}/>Admin ID : {admin_id}
          <a href='Adminlogout'>Logout</a>
          <hr/>
          <h5>Home</h5>
          <li> <a href="AdminAllLinks" >Home</a></li>
          <hr/>
      <li> <h5> <b>Customers</b></h5>
        <ul>
         <li> <a href="ViewAllCustomersAdmin" >View All Customers</a></li>
          <li><a href="ViewFeedbackAdmin" >View Feddbacks</a></li>
          </ul></li>
<hr/>
          <li> <h5> <b>Category   </b></h5>
            <ul>
              <li> <a href="ViewCategory" >View Category</a></li>
              <li> <a href="AddCategory" >Add Category</a></li>
              <li> <a href="RemoveCategory" >Remove Category</a></li>
            </ul></li>
            <hr/>
      <li> <h5> <b>Service Provider   </b></h5>
        <ul>
         <li> <a href="RemoveSP" >Remove ServiceProvider</a></li>
          <li><a href="ViewAllServiceProvider" >View ServiceProviders</a></li>
          <li><a href="ViewAllOrder" >Assign Service Provider</a></li>
          </ul></li>
          <hr/>
          <h5> <b>Orders</b></h5>
          <a href='ViewAllOrder'>View All Order</a>
          {/* <span style={{fontSize:"30px",cursor:"pointer"}} onClick={"openNav"}> &#9776; open</span> */}
         
        </ul>
        <h4>FixIt<span style={{color:"#FD7F2C"}}>Right</span><br/></h4>
        <p className="footer-company-name">FixItRight © 2022</p>
      </div>
    </>
  )
}
