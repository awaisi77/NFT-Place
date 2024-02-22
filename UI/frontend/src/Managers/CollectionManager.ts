import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from "../custom-config.json"
const URL=config.BASE_URL+"collection"

export class CollectionManager{
    public static async createCollection(params:FormData){
        let res=await axios.post(`${URL}/addCollection`,params);
        if(res.data.success){
            return {"message":res.data.message,success:true}
        }
        return {"message":"Error Occurred",success:false}
    }
    public static async getCollectionByUserId(id:string){
        debugger
       let res=await axios.get(`${URL}/getCollectionByUser?UserId=${id}`)
     
       console.log(res)
    }

}