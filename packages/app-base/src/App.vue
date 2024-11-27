<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const push = (name: string) => {
    router.push({ name: name })
}
</script>

<template>
    <div class="jb-container">
        <div class="jb-container__shortcut">
            <div class="w">
                <el-link class="mr-2" :underline="false" type="primary" @click="push('Home')">
                    商城
                </el-link>
                <el-link :underline="false" type="primary" @click="push('Order')">订单</el-link>
            </div>
        </div>
        <div class="jb-container__app-wrapper">
            <router-view class="w"></router-view>
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
