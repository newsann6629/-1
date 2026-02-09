import axios from "axios";
import { useUserStore } from "UserStore";


export const userauth = () => {

    const UserStore = useUserStore()

    const getuserform = async() => {
        UserStore.LoadUser()
        try{
            const res = await axios.get("api/user/form")
            return res.data.data
        }catch(err){
            console.log(err)
        }     
    }

    return {
        getuserform,
    }
}