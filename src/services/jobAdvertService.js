import axios from "axios"

export default class JobAdvertService {
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getbyid?jobAdvertId="+id)
    }
    
    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",values)
    }
}