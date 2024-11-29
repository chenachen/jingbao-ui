import { APP_CONFIG, AppName } from '../app-config.ts'
import { RouteInfo } from './types.ts'

const shopConfig = APP_CONFIG[AppName.SHOP]
const orderConfig = APP_CONFIG[AppName.ORDER]

export const BaseRouteRecordMap = new Map<AppName, RouteInfo>([
    [
        AppName.BASE,
        {
            name: AppName.BASE,
            path: '/',
        },
    ],
    [
        AppName.SHOP,
        {
            name: AppName.SHOP,
            path: shopConfig.basePath,
        },
    ],
    [
        AppName.ORDER,
        {
            name: AppName.ORDER,
            path: orderConfig.basePath,
        },
    ],
])
