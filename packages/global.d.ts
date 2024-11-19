export {}

declare global {
    interface ImportMetaEnv {
        readonly MOCK_ENABLED: boolean
        readonly BASE_PORT: number
        readonly SHOP_PORT: number
        readonly ORDER_PORT: number
    }
}
