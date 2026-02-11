import { api } from "../composables/api";
import { req } from "../composables/request";
import { useUserStore } from "../composables/UserStore";

export const useauth = () => {
    
    const http = api()
    const store = useUserStore()
    const go = useRouter()

    const login = (u,p) => req(async() => {
        const res = await http.post("auth/login",{
            email:u,
            password:p,
        })
        store.SetUser(res.data.auth)
        store.LoadUser()
        if(store.user.role == 1){
            go.push("admin/Dashboard/")
        }
        if(store.user.role == 2){
            go.push("user/Dashboard/")
        }
    })

    

    return {
        login,
    }
}
