import { APP_CONFIG, AppName } from '../app-config.ts'

export enum ShopRoutes {
    HOME = `${AppName.SHOP}_HOME`,
    SEARCH_RESULTS = `${AppName.SHOP}_SEARCH_RESULTS`,
    PRODUCT_DETAIL = `${AppName.SHOP}_PRODUCT_DETAIL`,
}

interface RouteInfo {
    name: string
    path: string
}

function getFullPath(path: string) {
    const { basePath } = APP_CONFIG[AppName.SHOP]
    return `${basePath}${path}`
}

export const ShopRouteRecordMap = new Map<ShopRoutes, RouteInfo>([
    [
        ShopRoutes.HOME,
        {
            name: ShopRoutes.HOME,
            path: getFullPath('/home'),
        },
    ],
    [
        ShopRoutes.SEARCH_RESULTS,
        {
            name: ShopRoutes.SEARCH_RESULTS,
            path: getFullPath('/search-result'),
        },
    ],
])
