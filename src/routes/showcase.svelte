<script>
  import Prism from '../components/PrismJS.svelte'
  import { Card, Container, Row, Column } from '@colorfuldots/svelteit'
  const showcaseApps = [
    {
      title: 'Svelteit Docs',
      description: 'Made with Svelteit components',
      image: 'svelteit-showcase.png',
      class: 'col-sm-4 text-center',
    },
    {
      title: 'Your Project',
      description: 'Your project...',
      image: 'logo-512.png',
      class: 'col-sm-4 text-center',
    },
    {
      title: 'Your Project',
      description: 'Your project...',
      image: 'logo-512.png',
      class: 'col-sm-4 text-center',
    },
  ]
</script>

<svelte:head>
  <title>Showcase - Svelteit Docs</title>
</svelte:head>

<h2>Showcase</h2>
<p>A collection of websites using Svelteit components</p>

<Container>
  <Row>
    {#each showcaseApps as app}
      <Column class={app.class}>
        <Card
          title={app.title}
          description={app.description}
          image={app.image} />
      </Column>
    {/each}
  </Row>
</Container>
