import { MicroApp } from '@micro-zoe/micro-app'

export {}

declare global {
    interface Window {
        microApp: MicroApp // 或更具体的类型
        __MICRO_APP_NAME__: string
    }
}
