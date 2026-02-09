import axios from "axios";
import { useUserStore } from "../composables/UserStore";


export const adminauth = () => {

    const UserStore = useUserStore()



    const getuser = async() => {
        UserStore.LoadUser()
        try{
            const res = await axios.get("api/admin/user",{
                headers: {
                    token: UserStore.token
                }
            })
            return res.data.data
        }catch(err){
            alert("ไม่สำเร็จ")
            console.log(err)
        }
    }

    const usersign = async(id) => {
        UserStore.LoadUser()
        try{
            const res = await axios.post("api/admin/usersign",{
                id:id,
                token:UserStore.token,
            })
            alert("สำเร็จ")
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const getusign = async() => {
        UserStore.LoadUser()
        try{
            const res = await axios.get("api/admin/usersign",{
                headers: {
                    token: UserStore.token
                }
            })
        return res.data.data
        }catch(err){
            console.log(err)
        }
    }

    const delusing = async(id) => {
        UserStore.LoadUser()
        try{
            const res = await axios.delete(`api/admin/usersign/${id}`,{
                data:{
                    token: UserStore.token
                }
            })
            window.location.reload()
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    const bsign = async(i,r) => {
        UserStore.LoadUser()
        try{
            const res = await axios.post("api/admin/boardsign",{
                token:UserStore.token,
                id:i,
                role:r,
            })
            alert("เพิ่มสำเร็จ")
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const getbsign = async() => {
        UserStore.LoadUser()
        try{
            const res = await axios.get("api/admin/boardsign",{
                headers:{
                    token: UserStore.token
                }
            })
            return res.data.data
        }catch(err){
            console.log(err)
        }
    }

    const delbsign = async(id) => {
        UserStore.LoadUser()
        try{
            const res = await axios.delete(`api/admin/boardsign/${id}`,{
                data:{
                    token: UserStore.token
                }
            })
            window.location.reload()
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    const addsec = async(i,w) => {
        UserStore.LoadUser()
        if(!i || !w){
            alert("ค่าว่าง")
            return
        }
        try{
            const res = await axios.post("api/admin/section",{
                token: UserStore.token,
                section: i,
                weight: w,
            })
        alert("เพิ่มสำเร็จ")
        window.location.reload()
        }catch(err){
            console.log(err)
        }
    }


    const addform = async(s,i,d,scale,sig) => {
        UserStore.LoadUser()
        try{
            const res = await axios.post("api/admin/indicator",{
                token:UserStore.token,
                section_id:s,
                indicator:i,
                detail: d,
                type:scale,
                file: Number(sig)
            })
        }catch(err){
            console.log(err)
        }
    }

    const getform = async() => {
        UserStore.LoadUser()
        try{
            const res = await axios.get("api/admin/form",{
                headers: {
                    token: UserStore.token
                }
            })
            return res.data.data
        }catch(err){
            console.log(err)
        }
    }

    return {
        getform,
        addform,
        addsec,
        delbsign,
        getbsign,
        bsign,
        delusing,
        getusign,
        usersign,
        getuser,
    }
}