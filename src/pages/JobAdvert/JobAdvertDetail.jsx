import React,{useEffect,useState} from "react";
import { useParams } from 'react-router'
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertDetail() {
    let {id} = useParams();
   
    const [jobAdvertisement, setJobAdvert] = useState({});

    useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getById(id)
      .then((result) => setJobAdvert(result.data.data));
  },[])
   
    return (
        <div>
           <button color="red" class="ui button">Application</button>
        </div>
    );
}
