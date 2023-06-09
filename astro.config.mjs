import { defineConfig } from 'astro/config'
import css from 'unocss/astro'

const setDefaultLayout = () => (tree, file) => {
  const isPage = file.data.astro.frontmatter.page_title !== undefined
  if (isPage) {
    file.data.astro.frontmatter.layout = '@layouts/base.astro'
  }
}

export default defineConfig({
  integrations: [css()],
  markdown: {
    remarkPlugins: [setDefaultLayout],
    shikiConfig: { theme: 'min-dark' },
  },
})
