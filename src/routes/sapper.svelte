<script>
  import Prism from '../components/PrismJS.svelte'
  const rollup_install = `
npm install -D @erictherobot/svelteit

# or if you prefer yarn

yarn add @erictherobot/svelteit --dev`
</script>

<svelte:head>
  <title>Installation with Sapper - Svelteit Docs</title>
</svelte:head>

<h2>Installation with Sapper</h2>

<article>
  <p>
    <b>Note:</b>
    The instructions below assume you have an existing Sapper project or you're
    starting a new project using
    <Prism
      language="bash"
      code={`npx degit "sveltejs/sapper-template#rollup" my-app`} />
  </p>
  <p>and that you've already added Svelteit like so:</p>

  <Prism language="bash" code={rollup_install} />

  <p>
    <b>1.</b>
    In order to process SCSS files you'll want to install autoPreprocess and
    node-sass by running the following command(s):
  </p>

  <Prism
    language="bash"
    code={`
npm install -D autoPreprocess node-sass

# or if you prefer yarn

yarn add autoPreprocess node-sass --dev
`} />

  <p>
    <b>2.</b>
    Edit your rollup.config.js file by importing the autoPreprocess plugin like
    so:
  </p>
  <Prism
    language="javascript"
    code={`
// your other imports
import autoPreprocess from 'svelte-preprocess'
// some other imports
`} />
  <p>
    <b>3.</b>
    Now add the following config to both the client and server sections like so:
  </p>

  <Prism
    language="javascript"
    code={`
svelte({
  dev,
  hydratable: true,
  emitCss: true,
  preprocess: autoPreprocess(), <<----- ADD THIS TO CLIENT AND SERVER
}),
`} />
  <p>
    <b>4.</b>
    Add your components of choice in your index.svelte or other files where
    you'd like to use a Svelteit component like so:
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import { Button } from '@erictherobot/svelteit'
</\script>

<Button
  on:click={() => alert('Hello Svelteit!')}
  title="Hello Svelteit"
  primary
  rounded
  outlined
/>
`} />

  <p>
    If everything went smoothly, you should see something like this in your
    sapper app:
  </p>

  <img src="./great-success-svelteit.png" alt="Great Success!" width="100%" />

  <p>That's It! Now you're ready to "Svelteit"!</p>

</article>
