import axios from "axios";
import { useUserStore } from "../composables/UserStore";
import { useRouter } from "vue-router";

export const useauth = () => {
    const go = useRouter()
    const Userstore = useUserStore()

    const login = async(u,p) => {
        try{
            if(!u || !p){
                alert("กรุณากรอกชื่อหรือรหัสผ่าน")
                return
            }

            const res = await axios.post("api/auth/login",{
                email: u,
                password: p
            })
            Userstore.Setuser(res.data.auth)
            Userstore.LoadUser()
            if(Userstore.user.role == 1){
                go.push("admin/Dashboard/")
            }
            if(Userstore.user.role == 2){
                go.push("user/Dashboard/")
            }
        }catch(err){
            console.log(err)
        }
    }

    const getregis = async() => {
        try{
            const res = await axios.get("api/auth/register")
            return res.data.data
        }catch(err){
            console.log(err)
        }
    }

    const register = async(u,p,czid,sal,date,phone,e,de,le,po) => {
        try{
            const res = await axios.post("api/auth/register",{
                username: u,
                password: p,
                czid: czid,
                sal: sal,
                bdate: date,
                phone: phone,
                email: e,
                department:de,
                level: le,
                position: po
            })
            alert("สำเร็จ")
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const gettime = async() => {
        try {
            const res = await axios.get("api/auth/time")
            return res.data.data
        }catch(err){
            alert("Something Went Wrong")
            console.log(err)
        }
    }

    return {
        register,
        login,
        getregis,
    }
}
