import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetMini } from 'unocss'

export default defineConfig({
    presets: [presetMini(), presetRemToPx()],
})
