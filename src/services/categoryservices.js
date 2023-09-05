import http from "../http-common";

class categoryservices{
    
    getAllCategory(){
        return http.get("/category");
    }

    getCategoryById(e){
        return http.get("/category/{category_id}")
    }

    registerCategory(e){
        return http.post("/category",e)
    }

    deleteCategory(di){
        return http.delete("/category/"+di)
    }

    updateCategory(e){
        return http.put("/category/{category_id}",e)
    }
}

export default new categoryservices();