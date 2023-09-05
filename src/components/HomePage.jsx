import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Adminlogin from './Adminlogin'
import Adminlogout from './Admin/AdminLogout'
import AdminHome from './Admin/AdminHome'
import AdminAllLinks from './Admin/AdminAllLinks'
import AdminSidebar from './Admin/AdminSidebar'

import AboutUs from './AboutUs'
import Home from './Home'
import NavHome from './NavHome'

import Category from './Admin/CategoryAdmin/Category'
import AddCategory from './Admin/CategoryAdmin/AddCategory'
import RemoveCategory from './Admin/CategoryAdmin/RemoveCategory'
import ViewCategory from './Admin/CategoryAdmin/ViewCategory'
import ViewSPbyCat from './Admin/CategoryAdmin/ViewSPbyCat'


import Customer from './Admin/CustomerAdmin/Customer'
import ViewAllCustomersAdmin from './Admin/CustomerAdmin/ViewAllCustomersAdmin'
import ViewFeedbackAdmin from './Admin/CustomerAdmin/ViewFeedbackAdmin'
import ServoceProviderAdmin from './Admin/ServiceproviderAdmin/ServiceProvider'
import RemoveSP from './Admin/ServiceproviderAdmin/RemoveSp'
import ViewAllServiceProvider from './Admin/ServiceproviderAdmin/ViewAllServiceProvider'
import ViewAllOrder from './Admin/ViewAllOrder'
import AssignSP from './Admin/AssignSP'


import CustomerHome from './Customer/CustomerHome'
import CustomerLogin from './Customer/CustomerLogin'
import RegisterCustomer from './Customer/RegisterCustomer'
import AddOrder from './Customer/AddOrder'
import CancelOrder from './Customer/CancelOrder'
import CustomerLogout from './Customer/CustomerLogout'
import GiveFeedback from './Customer/GiveFeedback'
import UpdateProfileCM from './Customer/UpdateProfileCM'
import ViewOrderCM from './Customer/ViewOrderCM'
import ViewServiceProvider from './Customer/ViewServiceProvider'
import ViewProfileCustomer from './Customer/ViewProfileCustomer'
import CustomerLinkPage from './Customer/CustomerLinkPage'
import CustomerSidebar from './Customer/CustomerSidebar'


import ViewSP from './Customer/ViewSP'


import ServiceProviderHome from './Serviceprovider/ServiceProviderHome'
import ServiceProviderLogin from './Serviceprovider/ServiceProviderLogin'
import SPLogout from './Serviceprovider/SPLogout'
import UpdateSPprofile from './Serviceprovider/UpdateSPprofile'
import ViewAllOrderSP from './Serviceprovider/ViewAllOrderSP'
import ViewFeedbackById from './Serviceprovider/ViewFeedbackById'
import ViewSPprofile from './Serviceprovider/ViewSPprofile'
import RegisterSP from './Serviceprovider/RegisterSP'
import SPLinks from './Serviceprovider/SPLinks'
import SPsidebar from './Serviceprovider/SPsidebar'

import App from './try'

import './style.css'
// import Footer from './Footer'



export default function HomePage() {
  return (
    <>  
      <Router>  
     <div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            
            {/*Admin COMPONENT LINKS */}
            <Route path="AdminAllLinks" element={<AdminAllLinks></AdminAllLinks>}></Route>
            <Route path="Adminlogin" element={<Adminlogin></Adminlogin>}></Route>
            <Route path="Adminlogout" element={<Adminlogout></Adminlogout>}></Route>
            <Route path="AdminHome" element={<AdminHome></AdminHome>}></Route>
            <Route path="ViewAllOrder" element={<ViewAllOrder></ViewAllOrder>}></Route>

            <Route path="Category" element={<Category></Category>}></Route>
            <Route path="AddCategory" element={<AddCategory></AddCategory>}></Route>
            <Route path="RemoveCategory" element={<RemoveCategory></RemoveCategory>}></Route>
            <Route path="ViewCategory" element={<ViewCategory></ViewCategory>}></Route>

            <Route path="Customer" element={<Customer></Customer>}></Route>
            <Route path="ViewAllCustomersAdmin" element={<ViewAllCustomersAdmin></ViewAllCustomersAdmin>}></Route>
            <Route path="ViewFeedbackAdmin" element={<ViewFeedbackAdmin></ViewFeedbackAdmin>}></Route>
            
            <Route path="ServoceProviderAdmin" element={<ServoceProviderAdmin></ServoceProviderAdmin>}></Route>
            <Route path="RemoveSP" element={<RemoveSP></RemoveSP>}></Route>
            <Route path="ViewAllServiceProvider" element={<ViewAllServiceProvider></ViewAllServiceProvider>}></Route>
            <Route path="AssignSP/:order_id" element={<AssignSP></AssignSP>}></Route>
            <Route path="AdminSidebar" element={<AdminSidebar></AdminSidebar>}></Route>
            

            <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="NavHome" element={<NavHome></NavHome>}></Route>
            

            {/*CUSTOMER COMPONENT LINKS */}
            <Route path="CustomerHome" element={<CustomerHome></CustomerHome>}></Route>
            <Route path="CustomerLogin" element={<CustomerLogin></CustomerLogin>}></Route>
            <Route path="RegisterCustomer" element={<RegisterCustomer></RegisterCustomer>}></Route>
            <Route path="AddOrder" element={<AddOrder></AddOrder>}></Route>
            <Route path="CancelOrder" element={<CancelOrder></CancelOrder>}></Route>
            <Route path="CustomerLogout" element={<CustomerLogout></CustomerLogout>}></Route>
            <Route path="GiveFeedback" element={<GiveFeedback></GiveFeedback>}></Route>
            <Route path="UpdateProfileCM" element={<UpdateProfileCM></UpdateProfileCM>}></Route>
            <Route path="ViewOrderCM" element={<ViewOrderCM></ViewOrderCM>}></Route>
            <Route path="ViewServiceProvider" element={<ViewServiceProvider></ViewServiceProvider>}></Route>
            <Route path="ViewProfileCustomer" element={<ViewProfileCustomer></ViewProfileCustomer>}></Route>
            <Route path="CustomerLinkPage" element={<CustomerLinkPage></CustomerLinkPage>}></Route>
            <Route path="CustomerSidebar" element={<CustomerSidebar></CustomerSidebar>}></Route>
            <Route path="ViewSP/:srid" element={<ViewSP></ViewSP>}></Route>
            <Route path="ViewSPbyCat/:catid" element={<ViewSPbyCat></ViewSPbyCat>}></Route>
            
             {/*Service Provider COMPONENT LINKS */}
            <Route path="RegisterSP" element={<RegisterSP></RegisterSP>}></Route>
            <Route path="ServiceProviderHome" element={<ServiceProviderHome></ServiceProviderHome>}></Route>
            <Route path="SPLogout" element={<SPLogout></SPLogout>}></Route>
            <Route path="UpdateSPprofile" element={<UpdateSPprofile></UpdateSPprofile>}></Route>
            <Route path="ViewAllOrderSP" element={<ViewAllOrderSP></ViewAllOrderSP>}></Route>
            <Route path="ViewFeedbackById" element={<ViewFeedbackById></ViewFeedbackById>}></Route>
            <Route path="ViewSPprofile" element={<ViewSPprofile></ViewSPprofile>}></Route>
            <Route path="SPLinks" element={<SPLinks></SPLinks>}></Route>
            <Route path="RegisterSP" element={<RegisterSP></RegisterSP>}></Route>
            <Route path="ServiceProviderLogin" element={<ServiceProviderLogin></ServiceProviderLogin>}></Route>
            <Route path="SPsidebar" element={<SPsidebar></SPsidebar>}></Route>
            

            <Route path="App" element={<App></App>}></Route> 



      

        </Routes>
        </div> 
      </Router>
      
      

      </>
  )
}
