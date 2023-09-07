import { defineConfig } from 'astro/config'

const setDefaultLayout = () => (tree, file) => {
  const isPage = file.data.astro.frontmatter.page_title !== undefined
  if (isPage) {
    file.data.astro.frontmatter.layout = '@layouts/base.astro'
  }
}

export default defineConfig({
  markdown: {
    remarkPlugins: [setDefaultLayout],
    shikiConfig: { theme: 'min-dark' },
  },
})
