<script>
  import Prism from '../components/PrismJS.svelte'
  const rollup_install = `
npm install -D @colorfuldots/svelteit

# or if you prefer yarn

yarn add @colorfuldots/svelteit --dev`
</script>

<svelte:head>
  <title>Installation With Svelte - Svelteit Docs</title>
</svelte:head>

<h2>Installation With Svelte</h2>

<article>
  <p>
    <strong>Note:</strong>
    The instructions below assume you have an existing Svelte project or you're
    starting a new project using
    <Prism
      language="bash"
      code={`npx degit sveltejs/template my-svelte-project`} />
  </p>
  <p>and that you've already added Svelteit like so:</p>

  <Prism language="bash" code={rollup_install} />

  <h3 class="content-title">Svelteit Configuration with Svelte</h3>
  <p>
    <strong>1.</strong>
    Install a PostCSS loader of choice. We recommend rollup-plugin-postcss
  </p>

  <Prism
    language="bash"
    code={`yarn add rollup-plugin-postcss --dev
`} />

  <p>
    <strong>2.</strong>
    Open rollup.config.js in your project and import the rollup-plugin-postcss
    module to the top of the file like so:
  </p>

  <Prism language="bash" code={`import postcss from 'rollup-plugin-postcss'`} />

  <p>
    <strong>3.</strong>
    Add this config to your rollup.config.js plugins: [ ] like so:
  </p>
  <Prism
    language="javascript"
    code={`
postcss({
    plugins: [],
}),
`} />
  <p>
    <strong>4.</strong>
    Rebuild and restart your project:
  </p>

  <Prism language="bash" code={`yarn build && yarn dev`} />
  <p>
    <strong>5.</strong>
    Import Svelteit CSS anywhere you'd like to use it. You should only have to
    do this once in your app's entry point. i.e. App.svelte
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import '@colorfuldots/svelteit/dist/css/svelteit.min.css'
</\script>
`} />
  <p>
    <strong>Optional:</strong>
    you can alternatively import the css file using Svelte's built in components
    like so:
  </p>

  <Prism
    language="markup"
    code={`
<svelte:head>
  <link rel="stylesheet" href="./path/to/library/svelteit.min.css" />
</\svelte:head>
`} />

  <p>
    <strong>6.</strong>
    Add your components of choice like so:
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<div>
  <Button title="Hello Svelteit" primary rounded />
</div>
`} />

  <p>That's It! Now you're ready to "Svelteit"!</p>
</article>
