import axios from "axios"

export default class TalentService {
    getTalents(){
        return axios.get("http://localhost:8080/api/talents/getall")
    }
}