import { defineConfig, loadEnv } from 'vite'
import { convertViteEnv, getPathBaseRoot, createVitePlugins } from '@common/utils'

export default defineConfig(({ command, mode }) => {
    const isProduction = command === 'build'
    const envDir = getPathBaseRoot('envs')
    const { VITE_BASE_PORT } = convertViteEnv(loadEnv(mode, envDir))

    return {
        server: {
            port: VITE_BASE_PORT,
        },
        envDir,
        plugins: createVitePlugins(isProduction),
    }
})
