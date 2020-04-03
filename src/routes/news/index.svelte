<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`news.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts }
      })
  }
</script>

<script>
  export let posts
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>News - Svelteit Docs</title>
</svelte:head>

<h2>Recent News</h2>

<article>
  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="news/{post.slug}">{post.title}</a>
        <p>{post.date}</p>
      </li>
    {/each}
  </ul>
</article>
