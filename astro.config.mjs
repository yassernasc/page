import { defineConfig } from 'astro/config'
import css from 'unocss/astro'

const setDefaultLayout = () => (tree, file) => {
  file.data.astro.frontmatter.layout = '../layout.astro'
}

export default defineConfig({
  integrations: [css()],
  markdown: { remarkPlugins: [setDefaultLayout] },
})
