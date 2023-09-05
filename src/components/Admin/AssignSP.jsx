import React ,{useEffect,useState}from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import orderservices from '../../services/orderservices'
import { useNavigate } from 'react-router-dom';

export default function RegisterCustomer() {
  let navigate = useNavigate();
//   const [cr_id, setID] = useState('');
const param=useParams() 

    const getOrder=()=>{
    //   var id = localStorage.getItem('cr_id');
    orderservices.getOrdersById(param.order_id).then(
        (Response)=>{
            setData(Response.data)
        },
        (Error)=>{
            console.log(Error);
        }
    ) ; 
    }
    const[data,setData]=useState([]);
    
    useEffect (()=>{
        getOrder();
      })

    const{register,handleSubmit}=useForm()

    const sendData=(e)=>
    {
        orderservices.registerOrders(e)
        alert("Data Inserted Succesfully")
        // console.log(e)
        navigate('/ViewAllOrder');
    }
    
  return (
    <div>
    <h1>Assign Service Provider Page</h1>

    <form onSubmit={handleSubmit(sendData)}>
   {/*  */}
   <label ><b>Order ID</b></label>
    <input type="number" {...register('order_id')}  defaultValue={data.order_id} required/><br/><br/>
  
   <label ><b>Customer ID</b></label>
    <input type="number" {...register('crid')}  defaultValue={data.crid} required/><br/><br/>

   <label ><b>Address</b></label>
    <input type="text" {...register('or_address')} defaultValue={data.or_address} required/><br/><br/>

    <label ><b>Booking Date</b></label>
    <input type="date" {...register('or_bookingDate')} defaultValue={data.or_bookingDate} required/><br/><br/>

    <label ><b>City</b></label>
    <input type="text" {...register('or_city')} defaultValue={data.or_city} required/><br/><br/>

    <label ><b>Description</b></label>
    <input type="textarea" {...register('or_description')} defaultValue={data.or_description} required/><br/><br/>

    <label ><b>Mobile</b></label>
    <input type="number" {...register('or_mobileNo')} defaultValue={data.or_mobileNo} required/><br/><br/>

    <label ><b>Status</b></label>
    <input type="text" {...register('or_status')} value={"Inprocess"} defaultValue={data.or_status} readOnly /><br/><br/>

    <label ><b>Service Provider id</b></label>
   <input type="number" {...register('srid')}  defaultValue={data.srid} required/><br/><br/>

    <label ><b>Category Type</b></label>
  <select {...register('categorid')} required>
  <option  value={[1]}>Technician</option>
  <option  value={[2]}>Mechanic</option>
  <option  value={[3]}>Carpenter</option>
  <option  value={[4]}>Electrician</option>
  <option  value={[5]}>Plumber</option>
  </select>
  <br/><br/>

    <input type="submit" value={"Assign"}/>

    </form>
    </div>
  )
}
