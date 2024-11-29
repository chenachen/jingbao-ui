import { App } from 'vue'
import { Router } from 'vue-router'
import { AppStateChangeEvent } from '@common/types'

export function childAppSetup(app: App, router: Router) {
    window.unmount = () => {
        app.unmount()
    }

    const eventHandler = (e: unknown) => {
        if ((e as AppStateChangeEvent).detail.appState === 'aftershow') {
            const { pathname, search } = window.rawWindow.location
            const queryParams = new URLSearchParams(search)

            router.replace({
                path: pathname.replace(window.__MICRO_APP_BASE_ROUTE__, ''),
                query: Object.fromEntries(queryParams),
            })
        }
    }

    window.addEventListener('appstate-change', eventHandler)
}
