import React from 'react'
import { useForm } from 'react-hook-form'
import AdminSidebar from '../AdminSidebar';

import registercategory from '../../../services/categoryservices'

export default function AddCategory() {

    const{register,handleSubmit}=useForm()
    const sendData=(e)=>
    {
        // console.log(e);
       registercategory.registerCategory(e)
        alert("Data Inserted Succesfully")
    }
  return (
    <div >
       <AdminSidebar/>
        <h1>Add Category</h1>
    <form onSubmit={handleSubmit(sendData)} >
       <label>Category Id :</label>
       <input type="number"  {...register('category_id')} placeholder={"Enter Category Id"}></input><br/>

       <label>Category Name :</label>
       <input type="text"  {...register('category_name')} placeholder={"Enter Category Name"}></input><br/>

       
       <label></label><button type="submit" >Submit</button>
       <label/><button type="reset">Reset</button><br/>
       <label></label>
    </form>
    </div>
  )
}