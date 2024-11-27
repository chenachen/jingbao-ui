import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ShopRouteRecordMap, ShopRoutes } from '@common/constant'

const Home = () => import('../views/home/HomePage.vue')
const SearchResult = () => import('../views/search-result/SearchResult.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {
            name: ShopRoutes.HOME,
        },
        children: [
            {
                ...ShopRouteRecordMap.get(ShopRoutes.HOME)!,
                component: Home,
            },
            {
                ...ShopRouteRecordMap.get(ShopRoutes.SEARCH_RESULTS)!,
                component: SearchResult,
            },
        ],
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
