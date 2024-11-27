<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ShopRoutes } from '@common/constant'

const router = useRouter()

const toSearchResult = () => {
    router.push({
        name: ShopRoutes.SEARCH_RESULTS,
    })
}

const toOrderPage = () => {
    router.push('/order')
}
</script>

<template>
    <div>home page</div>
    <el-button type="primary" @click="toSearchResult"> 到搜索页 </el-button>
    <el-button type="primary" @click="toOrderPage"> 到订单页 </el-button>
</template>

<style scoped></style>
