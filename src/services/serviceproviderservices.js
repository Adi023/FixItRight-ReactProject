import http from "../http-common";

class serviceproviderservices{
    
    getAllServiceprovider(){
       return http.get("/serviceprovider")
    }

    getServiceproviderById(srid){
        return http.get("/serviceprovider/"+srid)
    }

    getSPbycatid(catid){
      return http.get("/serviceproviderbycat/"+catid)
  }

    regiSterserviceprovider(e){
       return  http.post("/serviceprovider",e)   }

    deleteServiceprovider(i){
       return  http.delete("/serviceprovider/"+i)
    }

    updateServiceprovider(e){
       return  http.put("/serviceprovider/{sr_id}",e)
    }
}

export default new serviceproviderservices();