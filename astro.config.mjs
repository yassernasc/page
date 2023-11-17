import { defineConfig } from 'astro/config'

const setDefaultLayout = () => (tree, file) => {
  const { frontmatter } = file.data.astro

  const isNote = !!frontmatter.subject
  const isProse = frontmatter.prose

  if (isNote) {
    file.data.astro.frontmatter.layout = '@layouts/prose.astro'
    file.data.astro.frontmatter.page_title = `${frontmatter.subject} notes`
    file.data.astro.frontmatter.description = `${frontmatter.subject} snippets and notes`
  } else if (isProse) {
    file.data.astro.frontmatter.layout = '@layouts/prose.astro'
  } else {
    file.data.astro.frontmatter.layout = '@layouts/base.astro'
  }
}

export default defineConfig({
  markdown: {
    remarkPlugins: [setDefaultLayout],
    shikiConfig: { theme: 'min-dark' },
  },
})
