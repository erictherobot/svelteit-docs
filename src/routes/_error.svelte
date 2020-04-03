<script>
  import Prism from '../components/PrismJS.svelte'

  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'

  const error404 = `console.log(Error ${status} - ${error.message});`
</script>

<svelte:head>
  <title>{status} - Svelteit Docs</title>
</svelte:head>

<h2>{status} - {error.message}</h2>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<Prism language="markup" code={error404} />

<a href=".">Go Home...</a>
