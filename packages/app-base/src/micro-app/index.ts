import microApp from '@micro-zoe/micro-app'
import { AppName, APP_CONFIG } from '@common/constant'
import { Router } from 'vue-router'

export function initMicroApp(router: Router) {
    microApp.start({
        'router-mode': 'native',
        iframe: true,
        'keep-alive': true,
    })

    const ShopConfig = APP_CONFIG[AppName.SHOP]
    const OrderConfig = APP_CONFIG[AppName.ORDER]
    microApp.preFetch([
        {
            name: ShopConfig.name,
            url: ShopConfig.url,
        },
        {
            name: OrderConfig.name,
            url: OrderConfig.url,
        },
    ])

    microApp.router.setBaseAppRouter(router)
}
