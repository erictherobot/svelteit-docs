<script>
  import { List } from '@colorfuldots/svelteit'
  let items = { fruit: 'Apple', kind: 'Fuji', color: 'Red' }
</script>

<svelte:head>
  <title>Roadmap - Svelteit Docs</title>
</svelte:head>

<h2>Roadmap</h2>
<p>Where we're headed...</p>

<List>
  {#each Object.entries(items) as item}
    <li>{item}</li>
  {/each}
</List>
