export {}

export interface ImportMetaEnv {
    readonly VITE_MOCK_ENABLED: boolean
    readonly VITE_BASE_PORT: number
    readonly VITE_SHOP_PORT: number
    readonly VITE_ORDER_PORT: number
    readonly VITE_HOST: string
    readonly VITE_BASE_PATH: string
    readonly VITE_SHOP_BASE_PATH: string
    readonly VITE_ORDER_BASE_PATH: string
}
