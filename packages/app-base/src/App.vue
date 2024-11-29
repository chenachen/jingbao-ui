<script setup lang="ts">
import { AppName } from '@common/constant'
import { useRouter } from 'vue-router'

const router = useRouter()

const toShopHomePage = () => {
    router.push({
        name: AppName.SHOP,
    })
}
const toOrderHomePage = () => {
    router.push({
        name: AppName.SHOP,
    })
}
</script>

<template>
    <div class="jb-container">
        <div class="jb-container__shortcut">
            <div class="w">
                <el-link class="mr-2" :underline="false" type="primary" @click="toShopHomePage">
                    商城
                </el-link>
                <el-link :underline="false" type="primary" @click="toOrderHomePage">订单</el-link>
            </div>
        </div>
        <div class="jb-container__app-wrapper">
            <router-view :key="$route.name" v-slot="{ Component }">
                <keep-alive>
                    <component class="w" :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<style scoped lang="scss">
.jb-container {
    display: flex;
    flex-direction: column;

    &__shortcut {
        height: 36px;
        line-height: 36px;
    }
}
</style>
