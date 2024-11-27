<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ShopRoutes } from '@common/constant'

const router = useRouter()

const toHomePage = () => {
    router.push({
        name: ShopRoutes.HOME,
    })
}

const toOrderPage = () => {
    router.push('/order')
}
</script>

<template>
    <div>search result</div>
    <el-button type="primary" @click="toHomePage"> 到首页 </el-button>
    <el-button type="primary" @click="toOrderPage"> 到订单页 </el-button>
</template>

<style scoped></style>
