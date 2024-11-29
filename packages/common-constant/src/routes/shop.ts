import { AppName } from '../app-config.ts'
import { RouteInfo } from './types.ts'

export enum ShopRoutes {
    HOME = `${AppName.SHOP}_HOME`,
    SEARCH_RESULTS = `${AppName.SHOP}_SEARCH_RESULTS`,
    PRODUCT_DETAIL = `${AppName.SHOP}_PRODUCT_DETAIL`,
}

export const ShopRouteRecordMap = new Map<ShopRoutes, RouteInfo>([
    [
        ShopRoutes.HOME,
        {
            name: ShopRoutes.HOME,
            path: '/home',
        },
    ],
    [
        ShopRoutes.SEARCH_RESULTS,
        {
            name: ShopRoutes.SEARCH_RESULTS,
            path: '/search-result',
        },
    ],
    [
        ShopRoutes.PRODUCT_DETAIL,
        {
            name: ShopRoutes.PRODUCT_DETAIL,
            path: '/product-detail',
        },
    ],
])
