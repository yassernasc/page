import { defineConfig } from 'astro/config'
import css from 'unocss/astro'

export default defineConfig({ integrations: [css()] })
