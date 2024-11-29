<script setup lang="ts">
import { ShopRoutes } from '@common/constant'
import { useCustomRouter } from '@common/utils'

const router = useCustomRouter()

const toSearchResult = () => {
    router.customPush({
        name: ShopRoutes.SEARCH_RESULTS,
        query: {
            test: 'ccc',
        },
    })
}

const toHomePage = () => {
    router.customPush({
        name: ShopRoutes.HOME,
    })
}
</script>

<template>
    <div>订单页面首页</div>
    <el-button type="primary" @click="toSearchResult"> 到搜索页 </el-button>
    <el-button type="primary" @click="toHomePage"> 到首页 </el-button>
</template>

<style scoped></style>
