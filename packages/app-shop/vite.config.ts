import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from '../../scripts/vite/plugins'
import { convertViteEnv, getPathBaseRoot } from '../../scripts/vite/utils'

export default defineConfig(({ command, mode }) => {
    const isProduction = command === 'build'
    const envDir = getPathBaseRoot('envs')
    const { VITE_SHOP_PORT } = convertViteEnv(loadEnv(mode, envDir))

    return {
        server: {
            port: VITE_SHOP_PORT,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@common/static/styles/element-var.scss" as *;',
                },
            },
        },
        envDir,
        plugins: createVitePlugins(isProduction),
    }
})
