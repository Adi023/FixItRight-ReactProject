import http from "../http-common";

class adminservices{

    getAll(){
        return http.get("/admin")
    }

    addAdmin(){
        return http.post("/admin");
    }

    getadminbyid(id){
        return http.get("/admin/"+id)
        
    }
}

export default new adminservices();