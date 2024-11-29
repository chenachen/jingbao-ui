import { AppName } from '../app-config.ts'
import { RouteInfo } from './types.ts'

export enum OrderRoutes {
    HOME = `${AppName.ORDER}_HOME`,
}

export const OrderRouteRecordMap = new Map<OrderRoutes, RouteInfo>([
    [
        OrderRoutes.HOME,
        {
            name: OrderRoutes.HOME,
            path: '/home',
        },
    ],
])
