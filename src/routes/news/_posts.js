// TODO, move this to Markdown Files
const posts = [
  {
    title: 'Svelteit v1.0.0-alpha.6',
    slug: 'svelteit-v1.0.0-alpha.6',
    date: '04-03-2020',
    html: `
      <p>Today April, 3 2020 we launched our alpha version of Svelteit. Svelteit is a minimalistic UI/UX component framework for <a href="https://svelte.dev">Svelte</a> and <a href="https://sapper.svelte.dev">Sapper</a> projects.</p>
      
      <p>Out of the box, we're launching with ~30 Svelteit components and plan to add more throughout our journey. Admittedly so, this is our first take on writing UI components for the open source community. We imagine this journey will be exciting at times and painful at others. For now, we're having fun!</p>

      <p>Happy Coding!</p>
		`,
  },
  {
    title: 'Svelteit v1.0.0-alpha.7',
    slug: 'svelteit-v1.0.0-alpha.7',
    date: '04-06-2020',
    html: `
      <p>Svelteit version v1.0.0-alpha.7 is released today. This release fixes several bugs and adds new components: ButtonGroup, Badges, Labels, as well as refactored Buttons and Lists components.</p>

      <p>We've also made it possible to import our components all together instead of individually by doing the following: import { Svelteit } from '@colorfuldots/svelteit' and then adding your component like so: <Svelteit.Button>Button Title</Svelteit.Button> - this option is backwards compatibility with your existing individual component imports like import { Button } from '@colorfuldots/svelteit'. </p>
      
      <p>Happy Coding!</p>
		`,
  },
]

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts
