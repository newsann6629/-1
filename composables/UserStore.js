import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";


export const useUserStore = defineStore("UserStore",{
    state:() => {
        token: ""
        id: null
        user: null
    },
    actions: {
        Setuser(token){
            if(typeof window != "undefined"){
                localStorage.setItem("token",token)
            }
            this.token =  token
            this.user = jwtDecode(this.token)
            this.id = this.user.id
        },
        LoadUser(){
           if(typeof window != "undefined"){
                this.token = localStorage.getItem("token")
            }
            this.user = jwtDecode(this.token)
            this.id = this.user.id
        },
        Logout(){
            if(typeof window != "undefined"){
                this.token = localStorage.removeItem("token")
            }
            this.user = null
            this.id = null
        }
    }
})