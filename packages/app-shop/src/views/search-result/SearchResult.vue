<script setup lang="ts">
import { OrderRoutes, ShopRoutes } from '@common/constant'
import { useCustomRouter } from '@common/utils'

const router = useCustomRouter()

const toHomePage = () => {
    router.push({
        name: ShopRoutes.HOME,
    })
}

const toOrderPage = () => {
    router.customPush({
        name: OrderRoutes.HOME,
    })
}
</script>

<template>
    <div>search result</div>
    <el-button type="primary" @click="toHomePage"> 到首页 </el-button>
    <el-button type="primary" @click="toOrderPage"> 到订单页 </el-button>
</template>

<style scoped></style>
