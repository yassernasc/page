import { defineConfig, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ dark: 'media' }),
    presetTypography({
      cssExtend: {
        h1: { 'margin-bottom': '2em' },
        h2: { 'font-size': '1.2em' },
        h3: { 'font-size': '1em' },
        h4: { 'font-size': '0.8em' },
      },
    }),
  ],
})
