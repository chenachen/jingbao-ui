export enum AppName {
    BASE = 'BASE',
    SHOP = 'SHOP',
    ORDER = 'ORDER',
}

export const APP_CONFIG = {
    [AppName.BASE]: {
        name: AppName.BASE,
        url: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_BASE_PORT}`,
        basePath: import.meta.env.VITE_BASE_PATH,
    },
    [AppName.SHOP]: {
        name: AppName.SHOP,
        url: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_SHOP_PORT}`,
        basePath: import.meta.env.VITE_SHOP_BASE_PATH,
    },
    [AppName.ORDER]: {
        name: AppName.ORDER,
        url: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_ORDER_PORT}`,
        basePath: import.meta.env.VITE_ORDER_BASE_PATH,
    },
}
