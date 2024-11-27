<script setup lang="ts">
import { APP_CONFIG, AppName } from '@common/constant'
const { name, url, basePath } = APP_CONFIG[AppName.ORDER]
</script>

<template>
    <micro-app :name="name" :url="url" :baseroute="basePath" iframe></micro-app>
</template>
