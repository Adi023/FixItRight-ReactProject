import http from "../http-common";

class customerservices{

    getAllCustomers(){
        return  http.get("/customer");
        
    }

    getCustomerById(cr_id){
        return http.get("/customer/"+cr_id)
    }

    registerCustomer(e){
        return http.post("/customer",e)
    }

    deleteCustomer(){
        return http.delete("/customer/{cr_id}")
    }

    updateCustomer(e){
        return http.put("/customer/{cr_id}",e)
    }
}

export default new customerservices();