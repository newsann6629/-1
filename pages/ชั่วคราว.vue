<template>
    <div>
        <input type="text" name="" id="" class="border" v-model="input1" placeholder="input1">
        <input type="text" name="" id="" class="border" v-model="input2" placeholder="input2">
        <button type="submit" @click="login(input1,input2)">press</button>
    </div>
</template>

<script setup>
import { useauth } from '../composables/auth'

const input1 = ref("")
const input2 = ref("")

const { getregis,login } = useauth()

</script>

<style lang="scss" scoped>

</style>