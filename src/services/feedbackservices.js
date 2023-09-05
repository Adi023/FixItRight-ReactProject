import http from "../http-common";

class feedbackservices{

    getAllFeedback(){
        return http.get("/feedback");
    }

    getFeedbackById(id){
        return http.get("/feedback/"+id)
    }

    registerFeedback(e){
        return http.post("/feedback",e) }

        getFeedbackBySr(id){
            return http.get("/feedbacksr/"+id)
        }

}
export default new feedbackservices();