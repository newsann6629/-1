<template>
    <div class="relative">
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
                        <label for="" class="text-white">async@a.com</label>
                    </div>
                    <div>
                        <button type="button" class="border rounded-md px-2.5 py-3 text-white">
                            Logout
                        </button>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/user/Dashboard/">หน้าแรก</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/user/Dashboard/profile">แก้ไขโปรไฟล์ส่วนตัว</nuxt-link>
                    </div>
                    <div class="text-white px-2 mb-2">
                        <nuxt-link to="/user/Dashboard/result">สรุปผลการประเมิน</nuxt-link>
                    </div>
                </div>
            </div>
            <div>
                <NuxtPage />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>