<template>
    <div class="relative h-screen overflow-auto">
        <div class="flex">
            <div class="bg-blue-600 h-screen max-w-50">
                <div class="px-20">
                    <div class="mt-3">
                        <img src="" alt="" srcset="" class="rounded-full w-20 h-20">
                    </div>
                    <div>
                        <label for="" class="text-white">นาย .. ..</label>
                    </div>
                    <div>
                        <label for="" class="text-white">email@a.com</label>
                    </div>
                    <div>
                        <button type="button" class="border rounded-md px-2.5 py-3 text-white" @click="logout">
                            Logout
                        </button>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/admin/Dashboard/">หน้าแรก</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/admin/Dashboard/group">มอบหมายกรรมการ</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/admin/Dashboard/time">กำหนดรอบการประเมิน</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/admin/Dashboard/edit">แก้ไขผู้ไช้</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/admin/Dashboard/form">เพิ่มแบบฟอร์มการประเมิน</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/admin/Dashboard/result">สรุปผลการประเมิน</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="flex-1 overflow-auto">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../../composables/UserStore';
import { useRouter } from 'vue-router';
const UserStore = useUserStore()
const go = useRouter()
function logout(){
    UserStore.Logout()
    go.push("/")
}
</script>

<style lang="scss" scoped>

</style>