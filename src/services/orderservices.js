import http from "../http-common";

class orderservices{
    
    getAllOrders(){
        return http.get("/orders");
    }

    getOrdersById(e){
        return http.get("/orders/"+e)
    }

    registerOrders(e){
        return http.post("/orders",e)   }

    deleteOrders(d){
        return http.delete("/orders/"+d)
    }

    viewOrderCr(i){
        return http.get("/ordercr/"+i)
    }

    viewOrderSr(s){
        return http.get("/ordersr/"+s)
    }

}

export default new orderservices();