import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { APP_CONFIG, AppName, OrderRouteRecordMap, OrderRoutes } from '@common/constant'

const Home = () => import('../views/home/HomePage.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: OrderRoutes.HOME,
        },
        children: [
            {
                ...OrderRouteRecordMap.get(OrderRoutes.HOME)!,
                component: Home,
            },
        ],
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(APP_CONFIG[AppName.ORDER].basePath),
})

export default router
