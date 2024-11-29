import { MicroApp } from '@micro-zoe/micro-app'

export {}

declare global {
    interface Window {
        microApp: MicroApp
        unmount: () => void

        rawWindow: Window
        rawDocument: Document

        __MICRO_APP_NAME__: string
        __MICRO_APP_BASE_ROUTE__: string
    }
}
