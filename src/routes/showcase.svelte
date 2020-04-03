<script>
  import Prism from '../components/PrismJS.svelte'
  import { Card, Container, Row, Column } from '@colorfuldots/svelteit'
  const showcaseApps = [
    {
      title: 'Svelteit Docs',
      description:
        'Svelteit Docs (this very website) was created with Svelteit components.',
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

<style>
  .col,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-sm-2,
  .col-sm-4,
  .col-sm-8 {
    background-color: white;
    border: 0px;
  }
</style>

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
