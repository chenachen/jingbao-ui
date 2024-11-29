import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { AppName, BaseRouteRecordMap } from '@common/constant'

const AppShop = () => import('../apps/AppShop.vue')
const AppOrder = () => import('../apps/AppOrder.vue')

const BASE_ROUTE_INFO = BaseRouteRecordMap.get(AppName.BASE)!
const HOME_ROUTE_INFO = BaseRouteRecordMap.get(AppName.SHOP)!
const ORDER_ROUTE_INFO = BaseRouteRecordMap.get(AppName.ORDER)!

const routes: RouteRecordRaw[] = [
    {
        path: BASE_ROUTE_INFO.path,
        redirect: {
            name: HOME_ROUTE_INFO.name,
        },
        children: [
            {
                name: HOME_ROUTE_INFO.name,
                path: HOME_ROUTE_INFO.path,
                component: AppShop,
                children: [
                    {
                        path: ':allPage(.*)',
                        component: AppShop,
                    },
                ],
            },
            {
                name: ORDER_ROUTE_INFO.name,
                path: ORDER_ROUTE_INFO.path,
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
