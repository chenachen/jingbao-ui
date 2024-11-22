export enum AppName {
    BASE = 'BASE',
    SHOP = 'SHOP',
    ORDER = 'ORDER',
}

export const APP_CONFIG = {
    [AppName.BASE]: {
        name: AppName.BASE,
        url: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_BASE_PORT}`,
    },
    [AppName.SHOP]: {
        name: AppName.SHOP,
        url: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_SHOP_PORT}`,
    },
    [AppName.ORDER]: {
        name: AppName.ORDER,
        url: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_ORDER_PORT}`,
    },
}
