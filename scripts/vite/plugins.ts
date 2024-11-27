import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { getPathBaseRoot } from './utils'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { PluginOption } from 'vite'

export function createVitePlugins(isProduction: boolean) {
    const plugins: PluginOption[] = [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => /^micro-app/.test(tag),
                },
            },
        }),
        UnoCSS({
            configFile: getPathBaseRoot('uno.config.ts'),
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: './src/types/auto-imports.d.ts',
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: './src/types/components.d.ts',
        }),
    ]

    if (isProduction) {
        plugins.push(
            viteCompression(),
            viteCompression({
                algorithm: 'brotliCompress',
                ext: '.br',
            }),
        )
    }

    return plugins
}
