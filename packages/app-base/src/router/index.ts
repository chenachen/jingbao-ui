import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { APP_CONFIG, AppName } from '@common/constant'

const AppShop = () => import('../apps/AppShop.vue')
const AppOrder = () => import('../apps/AppOrder.vue')

const shopConfig = APP_CONFIG[AppName.SHOP]
const orderConfig = APP_CONFIG[AppName.ORDER]

const routes: RouteRecordRaw[] = [
    {
        name: 'Base',
        path: '/',
        redirect: {
            name: 'Home',
        },
        children: [
            {
                name: 'Home',
                path: shopConfig.basePath,
                component: AppShop,
                children: [
                    {
                        path: ':allPage(.*)',
                        component: AppShop,
                    },
                ],
            },
            {
                name: 'Order',
                path: orderConfig.basePath,
                component: AppOrder,
                children: [
                    {
                        path: ':allPage(.*)',
                        component: AppOrder,
                    },
                ],
            },
        ],
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
