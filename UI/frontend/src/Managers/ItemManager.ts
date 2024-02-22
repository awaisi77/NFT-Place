import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from "../custom-config.json"
const URL_File=config.FILE_UPLOAD_URL
const URL=config.BASE_URL

export class ItemManager{
    public static async createItem(params:any){
        let res=await axios.post(`${URL}/item/addNewItem`,params);
        if(res.data.success){
            return {"message":res.data.message,success:true,data:res.data.result}
        }
        return {"message":res.data.message,success:false,data:null}
    }
    public static async getCollectionByUserId(id:string){
        debugger
       let res=await axios.get(`${URL}/getCollectionByUser?UserId=${id}`)
       console.log(res)
    }
    public static async uploadImage(params:FormData){
        let res=await axios.post(`${URL_File}`,params);
        if(res.status===200){
            let spl = res.data.split(",");
            let hashArray = spl[2].split(":");
            let hash = hashArray[1].replace(/['"]+/g, '');
            return {success:true,data:hash,message:'File Uploaded Successfully.'}
        }
        return {message:"Error Occurred",success:false,data:null}
    }
}