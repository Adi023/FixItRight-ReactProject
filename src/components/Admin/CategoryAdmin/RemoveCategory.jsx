// import axios from 'axios';
import React,{useState} from 'react'

import { useForm } from 'react-hook-form'
import removecategory from '../../../services/categoryservices'
import AdminSidebar from '../AdminSidebar';


export default function RemoveCategory() {

    const{register,handleSubmit}=useForm()

    const [category_id,  setId] = useState('');

    const sendData=(e)=>
    {
     var di = category_id
        // console.log(category_id)
       removecategory.deleteCategory(di)
      
        alert("Data Inserted Succesfully")
    }
  return (
    <div >
   <AdminSidebar/>
        <h1>Remove Category</h1>
       <form onSubmit={handleSubmit(sendData)} >
       <label>Category Id :</label>
       <input type="number"  {...register('category_id')}  onChange={(e) => setId(e.target.value)} placeholder={"Enter Category Id"}></input><br/>

       <label></label><button type="submit" >Remove</button><br/><br/>
       <label></label><button type="reset">Reset</button><br/>
    </form>
    </div>
  )
}