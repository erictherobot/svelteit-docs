// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: 'Svelteit v1.0.0-alpha.1',
    slug: 'svelteit-v1.0.0-alpha.1',
    date: '04-01-2020',
    html: `
			<p>Today April, 1 2020 we launched our alpha version of Svelte<em>it</em>. Svelte<em>it</em> is a minimalistic UI/UX component framework for <a href="https://svelte.dev">Svelte</a> and <a href="https://sapper.svelte.dev">Sapper</a> projects.</p>
		`,
  },
]

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts
