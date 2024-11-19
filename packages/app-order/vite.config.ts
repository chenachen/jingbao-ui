import { defineConfig, loadEnv } from 'vite'
import { convertViteEnv, getPathBaseRoot } from '../../scripts/vite/utils'
import { createVitePlugins } from '../../scripts/vite/plugins'

export default defineConfig(({ command, mode }) => {
    const isProduction = command === 'build'
    const envDir = getPathBaseRoot('envs')
    const { ORDER_PORT } = convertViteEnv(loadEnv(mode, envDir))

    return {
        server: {
            port: ORDER_PORT,
        },
        plugins: createVitePlugins(isProduction),
    }
})
