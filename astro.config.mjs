import { defineConfig } from 'astro/config'

const setDefaultLayout = () => (tree, file) => {
  const { frontmatter } = file.data.astro
  const isNote = !!frontmatter.subject

  if (isNote) {
    file.data.astro.frontmatter.layout = '@layouts/note.astro'
    file.data.astro.frontmatter.page_title = `${frontmatter.subject} notes`
    file.data.astro.frontmatter.description = `${frontmatter.subject} snippets and notes`
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
