<script setup lang="ts">
import { OrderRoutes, ShopRoutes } from '@common/constant'
import { useCustomRouter } from '@common/utils'

const router = useCustomRouter()

const toSearchResult = () => {
    router.customPush({
        name: ShopRoutes.SEARCH_RESULTS,
    })
}

const toOrderPage = () => {
    router.customPush({
        name: OrderRoutes.HOME,
    })
}
</script>

<template>
    <div>home page</div>
    <el-button type="primary" @click="toSearchResult"> 到搜索页 </el-button>
    <el-button type="primary" @click="toOrderPage"> 到订单页 </el-button>
</template>

<style scoped></style>
