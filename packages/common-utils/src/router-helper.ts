import {
    AppName,
    ShopRoutes,
    OrderRoutes,
    BaseRouteRecordMap,
    ShopRouteRecordMap,
    OrderRouteRecordMap,
    APP_CONFIG,
} from '@common/constant'
import { LocationQueryRaw, Router, stringifyQuery, useRouter } from 'vue-router'

type RouteName = OrderRoutes | ShopRoutes | AppName

export function getAppName(routeName: RouteName): AppName {
    const [appName] = routeName.split('_')

    return appName as AppName
}

function getRouteInfo(appName: AppName, routeName: unknown) {
    switch (appName) {
        case AppName.SHOP:
            return ShopRouteRecordMap.get(routeName as ShopRoutes)
        case AppName.ORDER:
            return OrderRouteRecordMap.get(routeName as OrderRoutes)
        default:
            return BaseRouteRecordMap.get(routeName as AppName)
    }
}

// 用于子应用之间的路由跳转，主应用无需这个
export function useCustomRouter() {
    const vueRouter = useRouter()

    const customPush = (
        { name, query }: { name: RouteName; query?: LocationQueryRaw },
        replace = false,
    ) => {
        const appName = getAppName(name)

        if (appName === window.__MICRO_APP_NAME__) {
            return replace ? vueRouter.replace({ name, query }) : vueRouter.push({ name, query })
        } else {
            let { path } = getRouteInfo(appName, name)!
            if (query) {
                path = `${path}?${stringifyQuery(query)}`
            }

            const baseRouter = window.microApp.router.getBaseAppRouter() as Router
            return baseRouter.push(APP_CONFIG[appName].basePath + path)
        }
    }

    return {
        ...vueRouter,
        customPush,
    }
}
