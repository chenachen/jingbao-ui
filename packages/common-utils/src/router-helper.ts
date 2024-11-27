import { AppName, ShopRoutes, OrderRoutes } from '@common/constant'
// import { useRouter } from 'vue-router'

type RouteName = OrderRoutes | ShopRoutes

export function getAppName(routeName: RouteName): AppName {
    const [appName] = routeName.split('_')

    return appName as AppName
}

// export function useCustomRouter() {
//     const vueRouter = useRouter()
//     const microRouter = window.microApp.router
//
//     const push = (routeName: RouteName) => {
//         const appName = getAppName(routeName)
//
//         if (appName === window.__MICRO_APP_NAME__) {
//             vueRouter.push({ name: routeName })
//         } else {
//         }
//     }
// }
