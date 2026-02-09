<template>
    <div>
        <div class="px-3 mt-3">
            <div class="border-l-blue">
                <label for="" class="text-3xl font-bold">มอบหมายการประเมิน</label>
            </div>
            <div class="card">
                <div>
                    <label for="" class="text-2xl">รายชื่อผู้เข้าประเมิน</label>
                    <div class="mt-3 grid grid-cols-2 gap-4">
                        <select name="" id="" class="input-field" v-model="idbsign">
                            <option :value="u.id" v-for="u in user" :key="u.id">{{ u.username }}</option>
                        </select>
                        <select name="" id="" class="input-field" v-model="role">
                            <option value="1">กรรมการ</option>
                            <option value="2">ประธาน</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn btn-blue" @click="bsign(idbsign,role)">
                            มอบหมายกรรมการ
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-7 mt-3 gap-4">
                <div class="card-t-blue" v-for="b in board" :key="b.board_id" @click="delbsign(b.board_id)">
                    <div>
                        <label for="" class="label">ชื่อ</label>
                        <label for="">{{ b.username }}</label>
                    </div>
                    <div>
                        <label for="">{{ b.role }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { adminauth } from '../../../composables/admin'

const { getuser,bsign,getbsign,delbsign } = adminauth()
const user = ref([])
const idbsign = ref([])
const role = ref("")
const board = ref([])

const ld = async() =>{
    user.value = await getuser()
    board.value = await getbsign()
    console.log(board.value)
}

onMounted(() => {
    ld()
})
</script>

<style lang="scss" scoped>

</style>