<template>
    <div>
        <div class="px-3 mt-3">
            <div class="border-l-blue">
                <label for="" class="font-bold text-3xl">ผู้ใช้ทั้งหมด</label>
            </div>
        </div>
        <div class="px-3 mt-3">
            <div class="card mt-3">
                <div class="grid grid-cols-7 gap-4">
                    <div class="card-t-blue mt-3" v-for="u in user" :key="u.id" @click="mode = u.id">
                        <div>
                            <label for="" class="label">ชื่อ : </label>
                            <label for="">{{ u.username }}</label>
                        </div>
                    </div>
                    <div v-if="mode" class="model">
                        {{ mode }}                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { adminauth } from '../../../composables/admin';

const { getuser } = adminauth()
const mode = ref(0)
const user = ref([])

const ld = async() => {
    user.value = await getuser()
    console.log(user.value)
}

onMounted(() => {
    ld()
})
</script>

<style lang="scss" scoped>

</style>