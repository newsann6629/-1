<template>
    <div>
        <div class="mt-3 px-3">
            <div class="flex">
                <div class="border-l-blue">
                    <div class="">
                        <label for="" class="text-3xl font-bold">เพิ่มแบบฟอร์มการประเมิน</label>
                    </div>
                </div>
                <div class="flex justify-end w-screen">
                    <div class="px-3">
                        <button type="submit" class="btn-yellow" @click="section = !section">
                            + เพิ่มหัวข้อการประเมิน
                        </button>
                    </div>
                    <div>
                        <button type="submit" class="btn-red" @click="form = !form">
                            + เพิ่มแบบประเมิน
                        </button>
                    </div>
                </div>
            </div>
            <div class="card mt-3">
                รอแบบฟอร์ม
            </div>
        </div>


        <div v-if="section" class="model">
            <div class="card">
                <div>
                    <label for="" class="text-3xl font-bold">เพิ่มหัวข้อการประเมิน</label>
                </div>
                <div>
                    <label for="">หัวข้อการประเมิน</label>
                    <input type="text" name="" class="input-field" id="" v-model="isec">
                </div>
                <div>
                    <label for="">น้ำหนักการไห้คะแนน</label>
                    <input type="number" name="" class="input-field" id="" v-model="iw">
                </div>
                <div class="grid grid-cols-2 mt-3 gap-4">
                    <button type="submit" class="btn-green" @click="addsec(isec,iw)">
                        บันทึก
                    </button>
                    <button type="submit" class="btn-red" @click="section = !section">
                        ยกเลิก
                    </button>
                </div>
            </div>
        </div>

        <div v-if="form" class="model">
            <div class="card">
                <div>
                    <label for="" class="text-3xl font-bold">เพิ่มแบบฟอร์มการประเมิน</label>
                </div>
                <div>
                    <label for="" class="text-3xl font-bold">หัวข้อใหญ่</label>
                </div>
                <div class="mt-3">
                    <label for="" class="label">หัวข้อการประเมิน</label>
                    <select name="" id="" class="input-field" v-model="secid">
                        <option :value="s.section_id" v-for="s in formdata" :key="s.section_id">{{ s.section }}</option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="" class="label">ตัวชี้วัด</label>
                    <input type="text" name="" class="input-field" id="" v-model="indicator">
                </div>
                <div class="mt-3">
                    <label for="" class="label">ลายละเอียด</label>
                    <input type="text" name="" class="input-field" id="" v-model="detail">
                </div>
                <div class="mt-3">
                    <label for="" class="label">รูปแบบการให้คะแนน</label>
                    <select name="" id="" class="input-field" v-model="scale">
                        <option value="1234">การไห้คะแนนแบบScale</option>
                        <option value="yes/no">ใช่/ไม่ใช่</option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="" class="label">แนบหลักฐาน</label>
                    <select name="" id="" class="input-field" v-model="sig">
                        <option value="0">ไม่ต้องการแนบ</option>
                        <option value="1">ต้องการแนบ</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 mt-3 gap-4">
                    <button type="submit" class="btn-green" @click="addform(secid,indicator,detail,scale,sig)">
                        บันทึก
                    </button>
                    <button type="submit" class="btn-red" @click="form = !form">
                        ยกเลิก
                    </button>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { adminauth } from '../../../composables/admin';

const { addsec,getform,addform } = adminauth()

const isec = ref("")
const iw = ref("")
const formdata = ref([])

const secid = ref("")
const indicator = ref("")
const detail = ref("")
const sig = ref("")
const scale = ref("")

const form = ref(false)
const section = ref(false)

const ld = async() =>{
    const f = await getform()
    formdata.value = f[0]
}

onMounted(() => {
    ld()
})
</script>

<style lang="scss" scoped>

</style>