<template>
    <div>
        <div class="px-3 mt-3">
            <div class="border-l-blue">
                <label for="" class="text-3xl font-bold">มอบหมายการประเมิน</label>
            </div>
            <div class="card">
                <div>
                    <label for="" class="text-2xl">รายชื่อผู้เข้าประเมิน</label>
                    <div>
                        <select name="" id="" class="input-field" v-model="idsign">
                            <option :value="u.id" v-for="u in user" :key="u.id">{{ u.username }}</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn btn-blue" @click="usersign(idsign)">
                            บันทึก
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7 mt-3 gap-4">
                <div class="card-t-blue" v-for="u in usign" :key="u.user_id" @click="delusing(u.user_id)">
                    <div>
                        <label for="" class="label">ชื่อ</label>
                        <label for="">{{ u.username }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { adminauth } from '../../../composables/admin'

const { getuser,usersign,getusign,delusing } = adminauth()
const user = ref([])
const usign = ref([])

const idsign = ref("")

const ld = async() =>{
    user.value = await getuser()
    usign.value = await getusign()
    console.log(usign.value)
}

onMounted(() => {
    ld()
})
</script>

<style lang="scss" scoped>

</style>